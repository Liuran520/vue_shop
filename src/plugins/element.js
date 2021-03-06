import Vue from 'vue'
import { Button ,Form, FormItem, Input,Message,Container,Header,Aside,Main,Menu,
    Submenu,MenuItem,Breadcrumb,BreadcrumbItem,Card,Row,Col,Table,TableColumn,Switch,Tooltip,
    Pagination,Dialog,MessageBox,Tag,Select,Option,Tree,Cascader,Alert,TabPane,Tabs,Steps,Step,CheckboxGroup,
    Checkbox,Upload
} from 'element-ui'

Vue.use(Button).use(Form).use(FormItem).use(Input)
.use(Container).use(Header).use(Aside)
.use(Main).use(Menu).use(MenuItem).use(Submenu)
.use(Breadcrumb).use(BreadcrumbItem).use(Card).use(Row).use(Col).use(Table).use(TableColumn)
.use(Switch).use(Tooltip).use(Pagination).use(Dialog).use(Tag).use(Select).use(Option).use(Tree)
.use(Cascader).use(Alert).use(TabPane).use(Tabs).use(Steps).use(Step).use(CheckboxGroup).use(Checkbox)
.use(Upload)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
