import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';


export class RuleGroupActions extends PureComponent {
  render() {
    const {config: {settings}, addRule, canAddRule, canDeleteGroup, removeSelf} = this.props;
    const {immutableGroupsMode, addRuleLabel, delGroupLabel, renderSize} = settings;
    const _addRuleLabel = "";

    const addRuleBtn = !immutableGroupsMode && canAddRule &&
      <Button
        key="group-add-rule"
        className="action action--ADD-RULE"
        onClick={addRule}
        size={renderSize}
      ><PlusOutlined />{_addRuleLabel}</Button>;
      
    const delGroupBtn = !immutableGroupsMode && canDeleteGroup &&
      <Button
        key="group-del"
        type="danger"
        className="action action--DELETE"
        size={renderSize}
        onClick={removeSelf}
      ><DeleteOutlined />{delGroupLabel}</Button>;

    return (
      <div className={`group--actions`}>
        {addRuleBtn}
        {/*delGroupBtn*/}
      </div>
    )
  }
}
