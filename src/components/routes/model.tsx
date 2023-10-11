import { HeaderLayout } from '@/components/common/headerLayout';
import { LoadingFull } from '@/components/common/loading';
import { Nav } from '@/components/model/Nav';
import { Tabs } from '@/components/model/Tabs';
import { NavigationTreeContext, SelectNavsContextProvider } from '@/components/model/context';
import { TypeContent } from '@/components/model/typeContent';
import { Category, Descriptor, ModelType, NavNode } from '@/lib/@types/lca';
import { useAsyncM } from '@/lib/hooks/useAsyncM';
import { getLcaModelNavData } from '@/lib/http';
import { ModelTypeName } from '@/lib/lca';
import { parseRefJson } from '@/lib/utils';
import { HEADER_HEIGHT } from '../../../config/defaultSettings';
import _ from 'lodash';
import { useMemo } from 'react';
import { GrTree } from 'react-icons/gr';
import { useSearchParams } from 'react-router-dom';
import Split from 'react-split';

export function Model() {
  const [sq] = useSearchParams();
  const id = sq.get('id') as string;
  const { value, loading } = useAsyncM(() => (!id ? Promise.resolve(undefined) : getLcaModelNavData(id)), [id]);

  const node = useMemo(() => {
    if (!value) return undefined;
    const [categories, descriptors] = value as [any, { [k: string]: { [k: string]: Descriptor[] } }];
    const root: NavNode = {
      id: 'root',
      children: [],
      type: 'folder',
      name: 'database',
      modelType: 'database',
    };
    const categoryMap: { [k: string]: Category } = {};
    const categoriesMap: { [k: string]: { [k: string]: Category[] } } = {};
    const mCategories = parseRefJson(categories) as Category[];

    mCategories.forEach((c) => {
      if (c.modelType) {
        categoryMap[c.id] = c;
        if (!categoriesMap[c.modelType]) categoriesMap[c.modelType] = {};
        const pId = c.category ? c.category.id : 'null';
        if (!categoriesMap[c.modelType][pId]) categoriesMap[c.modelType][pId] = [];
        // const list = categoriesMap[c.modelType][pId];
        // if (!list.find((item) => item.refId === c.refId && item.id === c.id))
        categoriesMap[c.modelType][pId].push(c);
      }
    });
    const ungroupTypes: ModelType[] = [ModelType.PRODUCT_SYSTEM, ModelType.PROCESS, ModelType.FLOW, ModelType.EPD];
    const group1Types: ModelType[] = [
      ModelType.IMPACT_METHOD,
      ModelType.IMPACT_CATEGORY,
      ModelType.SOCIAL_INDICATOR,
      ModelType.PARAMETER,
      ModelType.DQ_SYSTEM,
    ];
    const group2Types: ModelType[] = [
      ModelType.FLOW_PROPERTY,
      ModelType.UNIT_GROUP,
      ModelType.CURRENCY,
      ModelType.ACTOR,
      ModelType.SOURCE,
      ModelType.LOCATION,
    ];

    const buildChildren = (_type: ModelType, parentId: number | 'null'): NavNode[] => {
      const type = _type.toString();
      if (!categoriesMap[type]) categoriesMap[type] = {};
      const cates = (categoriesMap[type][parentId] || []).map<NavNode>((c: Category) => ({
        id: c.refId + '_' + c.id,
        children: buildChildren(_type, c.id),
        name: c.name,
        type: 'folder',
        modelType: c.modelType,
        data: c,
      }));

      if (!descriptors[type.toString()]) descriptors[type] = {};
      const descs = (descriptors[type][parentId + ''] || []).map<NavNode>((c: Descriptor) => ({
        id: c.refId + '_' + c.id,
        children: [],
        name: c.name,
        type: 'content',
        modelType: c.type,
        data: c,
      }));
      return _.sortBy([...cates, ...descs], 'name');
    };

    const mergeChildren = (nodes: NavNode[]) => {
      const res: NavNode[] = [];
      const tempName: { [k: string]: NavNode } = {};
      nodes.forEach((node) => {
        if (node.type === 'folder') {
          if (tempName[node.name]) {
            tempName[node.name].children = mergeChildren(tempName[node.name].children.concat(node.children));
          } else {
            tempName[node.name] = node;
            res.push(node);
          }
        } else {
          res.push(node);
        }
      });

      return _.sortBy(res, 'name');
    };
    const buildGroup = (group: string | null, types: ModelType[]) => {
      if (group !== null) {
        const mGroup: NavNode = {
          id: group,
          name: group,
          type: 'folder',
          modelType: group,
          children: [],
        };
        root.children.push(mGroup);
        mGroup.children = types.map((type) => ({
          id: type,
          name: ModelTypeName[type],
          type: 'folder',
          modelType: type,
          children: mergeChildren(buildChildren(type, 'null')),
        }));
      } else {
        types.forEach((type) => {
          root.children.push({
            id: type,
            name: ModelTypeName[type],
            type: 'folder',
            modelType: type,
            children: mergeChildren(buildChildren(type, 'null')),
          });
        });
      }
    };
    buildGroup(null, ungroupTypes);
    buildGroup('Indicators and parameters', group1Types);
    buildGroup('Background data', group2Types);
    console.info('root:', root);
    return root;
  }, [value]);
  return (
    <HeaderLayout className="">
      <div className="flex flex-col bg-white" style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
        {loading && <LoadingFull />}
        {!!node && (
          <SelectNavsContextProvider>
            <NavigationTreeContext.Provider value={{ descriptores: (value as any)[1] }}>
              <Split
                className="flex flex-1 w-full h-full split"
                sizes={[1, 99]}
                minSize={260}
                snapOffset={1}
                gutterSize={6}
                gutterStyle={() => ({
                  backgroundColor: '#f3f3f3',
                  cursor: 'col-resize',
                })}
              >
                <div className="flex flex-col overflow-hidden bg-transparent">
                  <div className="border-b border-solid border-b-gray-14">
                    <div className="flex gap-[6px] text-sm w-min h-[36px] px-2.5 items-center bg-gray-bg border border-b-0 border-solid border-gray-14">
                      <GrTree className="text-gray-9 fixGrColor" />
                      <span className="text-black">Navigation</span>
                    </div>
                  </div>
                  <div className="flex-1">{!!node && <Nav node={node} />}</div>
                </div>
                <div className="flex flex-col">
                  <Tabs />
                  <TypeContent id={id} />
                </div>
              </Split>
            </NavigationTreeContext.Provider>
          </SelectNavsContextProvider>
        )}
      </div>
    </HeaderLayout>
  );
}
