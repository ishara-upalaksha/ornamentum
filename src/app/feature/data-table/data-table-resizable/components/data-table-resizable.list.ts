import { ExampleFile, FileType } from '../../../../shared/models';

export const columnResizableUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-resizable-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-resizable-usage/column-resizable-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-resizable-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-resizable-usage/column-resizable-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-resizable-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-resizable-usage/column-resizable-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'column-resizable-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-resizable-usage/column-resizable-usage.data.ts')
  }
];

