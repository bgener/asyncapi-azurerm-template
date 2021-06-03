# Overview

This generator creates an Azure Resource Manager (ARM) template of Azure Function and Azure Service Bus queue. Furthermore, it creates a sample app (NodeJs) where the Azure Function is connected to the queue.

## How to run

In order to run the generator use the sample file `asyncapi.yaml` as follows:

```bash
ag asyncapi.yaml https://github.com/bgener/asyncapi-azurerm-template -o output
```
