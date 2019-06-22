import React from "react";
import { formatDateSimple } from "../../../src/helpers/index";
import Label from "../../../src/components/Label";

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
            component: () => <Label dangerText>{lot.qtdUnprocessed}</Label>
          },
          paymentDate: {
            value: lot.paymentPrevision,
            component: () => (
              <span>{formatDateSimple(lot.paymentPrevision)}</span>
            )
          },
          status: {
            value: "Processado",
            component: () => <Label>Deu boa</Label>
          }
        };
      })
      : [];
  return dataTable;
};

export default parseLotsToDataTable;
