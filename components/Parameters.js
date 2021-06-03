import { generateMermaidDiagram } from '../helpers/mermaidDiagram';

/* 
 * You can use in components also normal JS function. It is important that a given function should returns a string or its derivative.
 *
 * Notice also how it is checked if schemas are provided: `asyncapi.hasComponents() && asyncapi.components().hasSchemas()`.
 * Using `asyncapi.components().schemas()` without first checking by `has*` functions is risky because components and schemas objects can still be empty.
 * Always when you see something useful could be added to the API of parsed AsyncAPI document, please create an issue 
 * https://github.com/asyncapi/parser-js/issues
 */
export function Parameters({ asyncapi }) {  
  return `
{
  
}
`;
}
