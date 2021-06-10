import { Indent, IndentationTypes, withIndendation } from '@asyncapi/generator-react-sdk';

export function ArmTemplate({ childrenContent }) {
  return `
  {
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  ${childrenContent}
  }
`;
}