import { File } from '@asyncapi/generator-react-sdk';
import { generateExample } from '@asyncapi/generator-filters';

import { normalizeSchemaName } from '../../helpers/normalizeSchemaName';

/*
 * To render multiple files, it is enough to return an array of "File" components in the rendering component, like in following example.
 */
export default function({ asyncapi }) {
  //TODO: generate nodejs azure func

  const schemas = asyncapi.allSchemas();
  // schemas is an instance of the Map
  return Array.from(schemas).map(([schemaName, schema]) => {
    const name = normalizeSchemaName(schemaName);
    return (
      <File name={`${name}.html`}>
        <SchemaFile schemaName={schemaName} schema={schema} />
      </File>
    );
  });
}

/*
 * Here you can see an example of using 3rd party functions (there from `@asyncapi/generator-filters` package) 
 * inside the template - `generateExample` function.
 */
function SchemaFile({ schemaName, schema }) {
  const content = `
<div class="container mx-auto px-4">       
  This is an example for ${schemaName} schema:
  <pre class="hljs mb-4 border border-grey-darkest rounded">
    <code>${generateExample(schema.json())}</code>
  </pre>
</div>  
`;

  return (
    {content}
  );
}
