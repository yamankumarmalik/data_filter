// // Create a new worker file (data-worker.ts)
// import { dataset } from './shared/dataset.model';
// export class dataWorker{
// addEventListener('message', ({ data }) => {
//   const { largeDataset, types } = data;
//   const filteredDataset = largeDataset
//     .filter(
//       (product: dataset) =>
//         product.type === 'Electronics' || product.type === 'Furniture'
//     )
//     .map((product: dataset) => {
//       if (product.type === 'Electronics') {
//         return { ...product, name: `EProduct ${product.id + 1}` };
//       }
//       return product;
//     });
//   postMessage(filteredDataset);
// });
