import JsonView_ from 'react-json-view';

export function JsonView(p: { data?: any }) {
  if (!p.data) return null;
  return <JsonView_ src={p.data} collapsed={2} />;
}
