<?php
/**
 * This module is used for real time processing of
 * Novalnet payment module of customers.
 * Released under the GNU General Public License.
 * This free contribution made by request.
 * If you have found this script useful a small
 * recommendation as well as a comment on merchant form
 * would be greatly appreciated.
 *
 * @author       Novalnet AG
 * @copyright(C) Novalnet
 * All rights reserved. <https://www.novalnet.de/>
 */

namespace Novalnet\Migrations;

use Novalnet\Models\TransactionLog;
use Plenty\Modules\Plugin\DataBase\Contracts\Migrate;

/**
 * Class CreateTransactionTable
 */
class UpdateTransactionTable1
{
   
    /**
     * Create transaction log table
     *
     * @param Migrate $migrate
     */
    public function run(Migrate $migrate, TransactionLog $transactionLog)
    {
        $tableName = $migrate->getTableName();
        if (!empty ($tableName) && is_string ($tableName)) {
            $migrate->updateTable(TransactionLog::class);
        } else {
            $migrate->createTable(TransactionLog::class);
        }
    }
}
