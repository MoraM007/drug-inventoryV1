import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.mypharma.druginventory{
   export class Consignment extends Asset {
      consigId: string;
      drugName: string;
      useCase: string;
      quantity: number;
      price: number;
      owner: Trader;
   }
   export class Trader extends Participant {
      tradeId: string;
      firstName: string;
      lastName: string;
   }
   export class Trade extends Transaction {
      consignment: Consignment;
      newOwner: Trader;
   }
   export class ifSold extends Asset {
      consigID: string;
      soldOrNot: boolean;
      buyer: Retailer;
   }
   export class Distributor extends Participant {
      distributorId: string;
      name: string;
      address: string;
   }
   export class Retailer extends Participant {
      retailerId: string;
      name: string;
      address: string;
   }
   export class InventoryClerk extends Participant {
      clerkId: string;
      name: string;
   }
   export class Auditor extends Participant {
      auditorId: string;
      name: string;
   }
   export class Sell extends Transaction {
      buyer: Retailer;
      status: ifSold;
   }
   export class TradeNotification extends Event {
      consignment: Consignment;
   }
   export class RemoveHighQuantityConsignment extends Transaction {
   }
   export class RemoveNotification extends Event {
      consignment: Consignment;
   }
// }
