import React from "react";
import { formatDateSimple } from "../../../src/helpers/index";
import Badge from "../../../src/components/Badge";

// Exemplo de função para parsear os lots
const parseLotsToDataTable = lots => {
  const dataTable =
    lots && lots.length
      ? lots.map(lot => {
          return {
            id: {
              value: lot.id,
              hidden: true
            },
            name: {
              value: lot.name
            },
            notProcessed: {
              value: lot.qtdUnprocessed,
              component: () => <Badge dangerText>{lot.qtdUnprocessed}</Badge>
            },
            paymentDate: {
              value: lot.paymentPrevision,
              component: () => (
                <span>{formatDateSimple(lot.paymentPrevision)}</span>
              )
            },
            status: {
              value: lot.payableLotStatus,
              component: () => <Badge>Deu boa</Badge>
            }
          };
        })
      : [];
  return dataTable;
};

export default parseLotsToDataTable;
