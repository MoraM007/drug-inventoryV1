/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ConsignmentComponent } from './Consignment/Consignment.component';
import { ifSoldComponent } from './ifSold/ifSold.component';

import { TraderComponent } from './Trader/Trader.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { RetailerComponent } from './Retailer/Retailer.component';
import { InventoryClerkComponent } from './InventoryClerk/InventoryClerk.component';
import { AuditorComponent } from './Auditor/Auditor.component';

import { TradeComponent } from './Trade/Trade.component';
import { SellComponent } from './Sell/Sell.component';
import { RemoveHighQuantityConsignmentComponent } from './RemoveHighQuantityConsignment/RemoveHighQuantityConsignment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Consignment', component: ConsignmentComponent },
  { path: 'ifSold', component: ifSoldComponent },
  { path: 'Trader', component: TraderComponent },
  { path: 'Distributor', component: DistributorComponent },
  { path: 'Retailer', component: RetailerComponent },
  { path: 'InventoryClerk', component: InventoryClerkComponent },
  { path: 'Auditor', component: AuditorComponent },
  { path: 'Trade', component: TradeComponent },
  { path: 'Sell', component: SellComponent },
  { path: 'RemoveHighQuantityConsignment', component: RemoveHighQuantityConsignmentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
