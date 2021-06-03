export function Resources({ asyncapi }) {
  return `
{
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
      "maxDeliveryCount": 5,
      "enablePartitioning": true
    }
  }
}
`;
}
