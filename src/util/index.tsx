import Loadable from 'react-loadable';
import React from 'react';

const loadingComponent = () => {
  return (
    <div>loading</div>
  );
};
const loadable = (loader:any) => Loadable({
  loader,
  loading: loadingComponent,
});
console.log(loadable);
console.log(22222);
export default loadable;
