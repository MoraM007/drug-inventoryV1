/**
 * @param {org.mypharma.druginventory.SellToRetailer} SellToRetailer
 * @transaction
 */

function shipConsig(tx) {
    if(!tx.status.soldOrNot) {
      tx.status.soldOrNot = true;
      tx.status.buyer = tx.buyer;
  
      return getAssetRegistry('org.mypharma.druginventory.ifSold') 
          .then(function (assetRegistry) {
                return assetRegistry.update(tx.status);
              });
        }
  }
  
  /**
   * Remove all high volume Consignment
   * @param {org.mypharma.druginventory.RemoveHighQuantityConsignment} remove - the remove to be processed
   * @transaction
   */
  async function removeHighQuantityCOnsignment(remove) {
  
      let assetRegistry = await getAssetRegistry('org.mypharma.druginventory.Consignment');
      let results = await query('selectConsignmentsWithHighQuantity');
  
      for (let n = 0; n < results.length; n++) {
          let trade = results[n];
  
          // emit a notification that a trade was removed
          let removeNotification = getFactory().newEvent('org.mypharma.druginventory','RemoveNotification');
          removeNotification.consignment = trade;
          emit(removeNotification);
          await assetRegistry.remove(trade);
      }
  }
  
  /*/**
   * Track the trade of a commodity from one trader to another
   * @param {org.mypharma.druginventory.Trade} trade - the trade to be processed
   * @transaction
   */
  /*async function tradeCosignment(trade) {
  
      // set the new owner of the commodity
      trade.consignment.owner = trade.newOwner;
      let assetRegistry = await getAssetRegistry('org.mypharma.druginventory.Consginment');
  
      // emit a notification that a trade has occurred
      let tradeNotification = getFactory().newEvent('org.mypharma.druginventory', 'TradeNotification');
      tradeNotification.consignment = trade.consignment;
      emit(tradeNotification);
  
      // persist the state of the commodity
      await assetRegistry.update(trade.consignment);
  }*/
  /**
 * Track the trade of a commodity from one trader to another
 * @param {org.mypharma.druginventory.Trade} trade - the trade to be processed
 * @transaction
 */
    async function tradeCommodity(trade) {
        trade.consignment.owner = trade.newOwner;
        let assetRegistry = await getAssetRegistry('org.mypharma.druginventory.Consignment');
        await assetRegistry.update(trade.consignment);
    }

/**
 * @param {org.mypharma.druginventory.SellToClerk} SellToClerk
 * @transaction
 */

function shipClerk(tx1) {
    if(!tx1.status.soldOrNot) {
      tx1.status.soldOrNot = true;
      tx1.status.buyer1 = tx1.buyer1;
  
      return getAssetRegistry('org.mypharma.druginventory.ifSold2') 
          .then(function (assetRegistry) {
                return assetRegistry.update(tx1.status);
              });
        }
  }
/**
 * @param {org.mypharma.druginventory.SellToDistributor} SellToDistributor
 * @transaction
 */

function shipDistributor(tx1) {
    if(!tx1.status.soldOrNot) {
      tx1.status.soldOrNot = true;
      tx1.status.buyer2 = tx1.buyer2;
  
      return getAssetRegistry('org.mypharma.druginventory.ifSold3') 
          .then(function (assetRegistry) {
                return assetRegistry.update(tx1.status);
              });
        }
  }

/**
 * @param {org.mypharma.druginventory.SellToAuditor} SellToAuditor
 * @transaction
 */

function shipAuditor(tx1) {
    if(!tx1.status.soldOrNot) {
      tx1.status.soldOrNot = true;
      tx1.status.buyer3 = tx1.buyer3;
  
      return getAssetRegistry('org.mypharma.druginventory.ifSold4') 
          .then(function (assetRegistry) {
                return assetRegistry.update(tx1.status);
              });
        }
  }
