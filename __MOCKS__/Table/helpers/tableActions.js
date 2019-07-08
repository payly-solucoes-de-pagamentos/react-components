import React from "react";
import PropTypes from "prop-types";

import TooltipActions from "../../../src/components/TooltipActions";
import Tooltip from "../../../src/components/Tooltip";
import CalendarSlin from "../../../src/components/Icons/calendar-slin";
import TrashSlin from "../../../src/components/Icons/trash-slin";
import Download from "../../../src/components/Icons/download";
import XCirle from "../../../src/components/Icons/x-circle";
import Eye from "../../../src/components/Icons/eye";
import ORDER_STATUS from "./tableEnum";

const ActionComponent = ({ isOpen, data }) => {
  const editAction = () => {
    return (
      <Tooltip
        message="Reagendar"
        Icon={CalendarSlin}
        iconColor="#4A4A4A"
        iconSize="16px"
        onClick={() => {}}
      />
    );
  };

  const detailAction = () => (
    <Tooltip
      message="Visualizar"
      Icon={Eye}
      iconColor="#4A4A4A"
      iconSize="16px"
      onClick={() => {}}
    />
  );

  const cancelAction = () => (
    <Tooltip
      message="Cancelar"
      Icon={XCirle}
      iconColor="#4A4A4A"
      iconSize="16px"
      onClick={() => {}}
    />
  );

  const removeAction = () => (
    <Tooltip
      message="excluir"
      Icon={TrashSlin}
      iconColor="#4A4A4A"
      iconSize="16px"
      onClick={() => {}}
    />
  );

  const downloadAction = () => {
    return (
      <Tooltip
        message="Download"
        Icon={Download}
        iconColor="#4A4A4A"
        iconSize="16px"
        onClick={() => {}}
      />
    );
  };

  let tooltips = [];

  switch (data.status.value) {
    case ORDER_STATUS.ACCEPTED:
      tooltips = [editAction, cancelAction, downloadAction, detailAction];
      break;
    case ORDER_STATUS.PROCESSING:
      tooltips = [removeAction, detailAction];
      break;

    case ORDER_STATUS.PRE_PAID:
      tooltips = [removeAction, downloadAction, detailAction];
      break;
    default:
      tooltips = [detailAction];
      break;
  }

  return (
    <>
      <TooltipActions tooltips={tooltips} isOpen={isOpen} />
    </>
  );
};

ActionComponent.propTypes = {
  isOpen: PropTypes.bool,
  data: PropTypes.object
};

ActionComponent.defaultProps = {
  isOpen: false,
  data: {}
};

export default ActionComponent;
