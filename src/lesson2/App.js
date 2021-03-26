import ActionLink from "./1Action"
import Toggle from "./2Toggle"
import Greeting from "./3ConditionRender"
import MailBox from "./4Mailbox"
import LoginControll from "./5LoginControll"
import Page from "./6Warning"
import Components from "./7Components"
import NumberList from "./8BasicList"
import NumberListWithKeyWrong from "./9Key"
import NumberListWithKeyCorrect from "./10KeyCorrect"
import NameForm from "./11ControlledForm"

let App = <ActionLink />
App = <Toggle />
//3
App = <Greeting isLoggedIn={true} />
//4条件渲染
const messages = ['React', "Vue", "Angular"]
App = <MailBox unreadMessage={messages} />
//5 综合click、条件渲染
App = <LoginControll />

//6 阻止渲染
App = <Page />

//7渲染多个元素
App = <Components />

//8基础列表
const numbers = [1, 2, 3, 4, 5]
App = <NumberList numbers={numbers} />

//9 错误的Key用法
App = <NumberListWithKeyWrong numbers={numbers} />

//10 正确的Key用法
App = <NumberListWithKeyCorrect numbers={numbers} />

//11 表单受控组件
App = <NameForm />
export default App