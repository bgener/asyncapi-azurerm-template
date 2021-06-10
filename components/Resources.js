export function Resources({ asyncapi }) {
  return `
  "resources": [
  {
    "type": "Microsoft.Servicebus/namespaces/queues",
    "apiVersion": "2017-04-01",
    "name": "[concat(variables('serviceBusName'), '/', variables('serviceBusQueues')[copyIndex()])]",
    "dependsOn": ["[variables('serviceBusName')]"],
    "copy": {
      "name": "channelsLoop",
      "count": "[length(variables('serviceBusQueues'))]"
    },
    "properties": {
      "deadLetteringOnMessageExpiration": true,
      "enablePartitioning": true
    }
  }
]
`;
}