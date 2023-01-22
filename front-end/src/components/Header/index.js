import { Tabs } from "antd";
import "./style.css";
const { TabPane } = Tabs;
const Header = (props) => {
  return (
    <Tabs className= ""
    tabPosition="bottom" 
    centered={true} 
    defaultActiveKey={"Performance"} 
    activeKey={props.active}>
      <TabPane
        tab={<span><a className="no-underline" href={`/otherprofile/${props.user_id}`}>Performance</a></span>}
        key="Performance"
      ></TabPane>
      <TabPane
        tab={
          <div className="w-24 flex justify-center items-center gap-1 text-default">
           <a className="no-underline" href={`/otherprofile/${props.user_id}/tasks`}> Task</a>
          </div>
        }
        key="Task"
      ></TabPane>
    </Tabs>
  );
};
export default Header;
