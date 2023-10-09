declare namespace ApiModel {
  //列表页公共参数
  interface Page<T> {
    countId?: number;
    current: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: [];
    pages: number;
    searchCount?: boolean;
    size: number;
    total: number;
    records: T;
  }

  type ListRecords = {
    createTime: string;
    createUserId?: number;
    description?: string;
    historyList?: ListRecords[];
    id: number;
    imageUrl?: number;
    model?: ModelInfo;
    name?: string;
    org?: Organization;
    orgId: number;
    partNumber?: number;
    state?: number;
    updateTime?: string;
    updateUser: RecordUpdateUserList;
    updateUserId: number;
    uuid: any;
    version: string;
  };

  type ProduceSystemList = Page<ListRecords[]>;

  type RecordUpdateUserList = {
    address?: string;
    admin: boolean;
    apiKeyId?: number;
    createTime?: string;
    email?: string;
    id?: number;
    lastLoginTime?: string;
    mobile?: string;
    name: string;
    orgId?: number;
    password?: string;
    privateKey?: number;
    publicKey?: number;
    role?: string;
    siteId?: number;
    system: boolean;
    updateTime?: string;
  };

  type ModelInfo = {
    baseModelPath?: string;
    createTime?: string;
    createUserId?: number;
    description?: string;
    id: number;
    state: number;
    lastUpdateUserId?: number;
    modelDbPath?: string;
    modelName: string;
    modelUuid: string;
    paramDetail: string;
    productId: 1;
    productSystemUuid?: string;
    updateTime?: string;
    modelBomInfo?: string;
  };
  interface Site {
    name: string;
    displayName: string;
  }
  interface Organization {
    id: number;
    name: string;
    imageUrl: string;
    displayName: string;
    type: string;
    sitList: Site[];
    createTime: string;
    updateTime: string;
    serialNumber: string;
  }

  interface UserData {
    id: number;
    apiKeyId: number;
    name: string;
    password: string;
    role: string;
    authLevel: number;
    lastLoginTime: string;
    loginTime: number;
    createTime: string;
    updateTime: string;
    loginToken: string;
    organization: Organization;
  }
  interface Product {
    id: number;
    name: string;
    uuid: string;
    type: string;
    imageUrl: string;
    manufacturingStatus: number;
    displayName: string;
    topLevelPartNumberId: number;
    orgId: number;
    organization: Organization;
    createTime: string;
    updateTime: string;
  }

  interface ProductBom {
    id: number;
    partNumber: string;
    partName: string;
    partType: string;
    supplierName: string;
    supplierId: number;
    partDisplayName: string;
    material: string;
    measurement: string;
    extras: string;
    orgId: number;
    parentPartNumberId: number;
    count: number;
    createTime: string;
    updateTime: string;
    children: ProductBom[];

    // code add
    deep: number;
    parent: ProductBom;
  }
  interface ActivityType {
    id: number;
    partNumberId: number;
    name: string;
    displayName: string;
    description: string;
    extraInfo: string;
    scope: number;
    processId: number;
    createTime: string;
    updateTime: string;
  }

  interface ProductProcess {
    id: number;
    name: string;
    phase: string;
    displayName: string;
    description: string;
    createTime: string;
    updateTime: string;
    activityTypes: ActivityType[];
  }

  interface Phase {
    name: string;
    processList: ProductProcess[];
  }

  interface InventoryActivity {
    id: 0;
    serialNumber: string;
    partNumberId: 0;
    activityTypeId: 0;
    ghgEmission: 0;
    orgId: 0;
    createTime: '2023-02-15 09:21:23';
    updateTime: '2023-02-15 09:21:23';
  }

  interface InventoryActivityType extends ActivityType {
    inventoryActivityList: InventoryActivity[];

    // code add
    carbon_emission: number;
  }

  interface InventoryProductProcess extends ProductProcess {
    activityTypes: InventoryActivityType[];

    // code add
    carbon_emission: number;
  }

  interface InventoryPhase extends Phase {
    processList: InventoryProductProcess[];
    progress: number; // 0 -> 100
    carbon_emission: number;
  }

  interface SbtInfo {
    id: number;
    serialNumber: string;
    productId: number;
    partNumberId: number;
    orgId: number;
    sbtNetwork: string;
    sbtAddress: string;
    sbtTokenId: string;
    sbtMetadataUrl: string;
    sbtMintTimestamp: number;
    createTime: string;
    updateTime: string;
    productName: string;
    imageUrl: string;
  }

  interface SbtEmissionInventory {
    id: number;
    name: string;
    phase: string;
    displayName: string;
    description: string;
    createTime: string;
    updateTime: string;
    ghgEmission: number;
  }

  interface SbtDetail {
    sbtTokenId: string;
  }

  interface SbtPhase {
    name: string;
    progress: number; // 0 -> 100
    carbon_emission: number;
    verified: boolean;
  }

  type Records = {
    records: {
      uuid: string;
      tokenId: number;
      loadName: string;
      orgName: string;
      orgType: string;
      proofTime: string;
      verifyUserName: string;
      tokenUrl: string;
    }[];
  };
  interface TagInfo {
    uuid: string; //标签编号
    productName: string; //产品型号
    loadNumber: string; //产品唯一标识符 productUuid(暂无后期会加)
    orgName: string; //标签申请主体
    evaluationType: string; //评价类型
    evaluationAgency: string; // 评价机构
    tokenId: number; //区块链SBT证书编号
    functionalUnit?: string; //功能单位
    evaluationBoundary?: string; //评价边界
    evaluationBasis?: string; //评价依据
    evaluationExpireTime?: string; //评价有效期
    pcfResult: string;
  }

  interface TransferEvent {
    id: number;
    chainId: number;
    contractAddress: string;
    blockNumber: number;
    txHash: string;
    logIndex: number;
    fromAddress: string;
    toAddress: string;
    fromTokenId: number;
    toTokenId: number;
    eventType: number;
    blockTimestamp: number;
    createTime: string;
    updateTime: string;
  }

  interface SbtNftList {
    tokenId: number;
    uuid: string;
    loadNumber: string;
    orgName: string;
    ownerAddress: string;
    productName: string;
    productUuid: string;
    labelCredential: string;
    pcfResult: string;
    proofTime: string;
    transferEvents: TransferEvent[];
  }

  interface InventoryAddRealDataModalProps {
    onOpenModal: () => void;
    realData: (val) => val;
    tableData: InventoryRealDataList[];
    realArr?: LcaParamList[];
  }
  type InventoryResultModalProps = {
    openResultModal: () => void;
    getList: () => void;
  };

  type InventoryProductSystemList = {
    id: number | string;
    name: string;
  };

  type InventoryRealDataAllList = {
    paramDetail: string;
  };

  type InventoryRealDataList = {
    context: InventoryRealDataListContext;
    isProtected: boolean;
    name: string;
    value: number;
    inputValue?: any;
  };

  type InventoryRealDataListContext = {
    '@id': string;
    name: string;
    '@type': string;
    category: string;
    flowType: string;
    name: string;
    processType: string;
  };

  type uploadResult = {
    loadName: string;
    productId: string;
    lcaParamList?: LcaParamList[];
  };
  type LcaParamList = {
    dateTime: string;
    paramName: string;
    paramValue: string;
    processId: string;
  };

  interface InventoryInfo {
    calculateSuccessTime: string;
    loadName: string;
    loadNumber: string;
    operator: string;
    orgName: string;
    orgSerialNumber: string;
    param: string;
    paramDetail: string;
    productDescription: string;
    productName: string;
    productUuid: string;
    productVersion: string;
    state: number;
  }

  type InventoryList = Page<InventoryInfo[]>;

  type InventoryDetail = {
    calculateSuccessTime: string;
    createTime?: string;
    id: number;
    lcaMethodId: number;
    lcaResult: string;
    lcaTagResult: string;
    loadNumber: string;
    loadName: string;
    modelId: number;
    orgId: number;
    siteId?: number;
    state: number;
    updateTime: string;
  };

  type ParamDetailType = {
    inputData: string;
    data: string;
  };

  type VerificationManagementModal = {
    closeModal: (success: boolean) => void;
    recordId?: number;
    type: 'new' | 'editor' | 'verify';
  };

  type ViewVerificationManagementModal = {
    closeModal: () => void;
    fileList: AttachmentFileList[];
  };

  type ListPage = {
    current?: number;
    optimizeCountSql?: boolean;
    orders?: [];
    pages: number;
    records: VerificationRecord[];
    searchCount: boolean;
    size: number;
    total: number;
  };
  type AttachmentFileList = {
    downloadUrl: string;
    fileName: string;
  };

  type VerificationRecord = {
    attachmentFileList: AttachmentFileList[];
    createTime?: string;
    createUser: {
      admin: boolean;
      id: string;
      name: string;
      system: boolean;
    };
    createUserId: number;
    description: string;
    id: number;
    inventory: {
      loadName: string;
    };
    loadNumber: string;
    name: string;
    orgId: number;
    organization: {
      id: number;
      name: string;
    };
    state: number;
    updateTime: string;
    uuid: string;
    verifyFileList: {
      fileName: string;
      downloadUrl: string;
    }[];
    verifyUser: {
      admin: boolean;
      id: number;
      name: string;
      system: boolean;
    };
    verifyUserId: number;
  };
}
