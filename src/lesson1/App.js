import ActionLink from "./1Action"
import Toggle from "./2Toggle"
import Greeting from './3ConditionRender'
import LoginControl from "./4LoginControl"
import Mailbox from "./5Mailbox"
import InlineLoginControl from "./6InlineLoginControl"
import Page from "./7Warning"
import Components from './8Components'
import NumberList from "./9BasicList"
import NumberListWithKeyFalse from "./10Key"
import NumberListWithKeyTrue from "./11KeyCorrect"
import Blog from "./12KeySilbing"
import NameForm from "./13ControlledComp"
import EssayForm from "./14Textarea"
import { MyComponent, CustomTextInput, AutoFocusTextInput, FuncTextInput } from "./15BasicRef"
import NameFormUncontrolled from "./16UncontrolledComp"
import FileInput from "./17FileInput"
import { Demo, DemoControlled } from "./18DeepIntoComp"
import InversePattern from "./19InversePattern"

let App = <ActionLink />
App = <Toggle />

App = <Greeting isLoggedIn={false} />
App = <LoginControl />

const messages = ['React', 'Re: React', 'Re:Re: React'];
App = <Mailbox unreadMessages={messages} />

App = <InlineLoginControl />

App = <Page />

//8
App = <Components />

//9
const numbers = [1, 2, 3, 4, 5];
App = <NumberList numbers={numbers} />

//10
App = <NumberListWithKeyFalse numbers={numbers} />

//11
App = <NumberListWithKeyTrue numbers={numbers} />

//12
const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
App = <Blog posts={posts} />

//13
App = <NameForm />

//14
App = <EssayForm />

//15
App = <MyComponent />

App = <CustomTextInput />

App = <AutoFocusTextInput />

App = <FuncTextInput />

//16
App = <NameFormUncontrolled />

//17
App = <FileInput />

//18
App = <Demo />
App = <DemoControlled />

//19
App = <InversePattern />
export default App