import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { PlusOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
const ButtonGroup = Button.Group;

const groupActionsPositionList = {
  topLeft: 'group--actions--tl',
  topCenter: 'group--actions--tc',
  topRight: 'group--actions--tr',
  bottomLeft: 'group--actions--bl',
  bottomCenter: 'group--actions--bc',
  bottomRight: 'group--actions--br'
}
const defaultPosition = 'topRight';


export class GroupActions extends PureComponent {
  render() {
    const {config: {settings}, addRule, addGroup, canAddGroup, canAddRule, canDeleteGroup, removeSelf} = this.props;
    const {immutableGroupsMode, addRuleLabel, addGroupLabel, delGroupLabel, renderSize, groupActionsPosition} = settings;
    const position = groupActionsPositionList[groupActionsPosition || defaultPosition];

    const addRuleBtn = !immutableGroupsMode && canAddRule &&
      <Button
        key="group-add-rule"
        className="action action--ADD-RULE"
        onClick={addRule}
      ><PlusOutlined />{addRuleLabel}</Button>;
    const addGroupBtn = !immutableGroupsMode && canAddGroup &&
      <Button
        key="group-add-group"
        className="action action--ADD-GROUP"
        onClick={addGroup}
      ><PlusCircleOutlined />{addGroupLabel}</Button>;
    const delGroupBtn = !immutableGroupsMode && canDeleteGroup &&
      <Button
        key="group-del"
        type="danger"
        className="action action--DELETE"
        onClick={removeSelf}
      ><DeleteOutlined />{delGroupLabel}</Button>;

    return (
      <div className={`group--actions ${position}`}>
        <ButtonGroup
          size={renderSize}
        >
          {addRuleBtn}
          {addGroupBtn}
          {delGroupBtn}
        </ButtonGroup>
      </div>
    )
  }
}
