(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(7),o=r.n(s),a=(r(12),r(2)),u=r(3),c=r(5),i=r(4),d=r(0),l=function(e){return Object(d.jsxs)("form",{onSubmit:e.addCourse,children:[Object(d.jsx)("input",{type:"text",value:e.current,onChange:e.updateCourse}),Object(d.jsx)("button",{type:"submit",children:"Add Course"})]})},p=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isEdit:!1},e.renderCourse=function(){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:e.props.details.name}),Object(d.jsx)("button",{onClick:function(){e.toggleState()},children:"Edit Course"}),Object(d.jsx)("button",{onClick:function(){e.props.deleteCourse(e.props.index)},children:"Delete Course"})]})},e.toggleState=function(){var t=e.state.isEdit;e.setState({isEdit:!t})},e.updateCourseItem=function(t){t.preventDefault(),e.props.editCourse(e.props.index,e.input.value),e.toggleState()},e.renderUpdateForm=function(){return Object(d.jsxs)("form",{onSubmit:e.updateCourseItem,children:[Object(d.jsx)("input",{type:"text",ref:function(t){e.input=t},defaultValue:e.props.details.name}),Object(d.jsx)("button",{children:"Update Course"})]})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state.isEdit;return Object(d.jsx)(n.Fragment,{children:e?this.renderUpdateForm():this.renderCourse()})}}]),r}(n.Component),j=p,h=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={courses:[{name:"HTML"},{name:"CSS"},{name:"jQuery"}],current:""},e.updateCourse=function(t){e.setState({current:t.target.value})},e.addCourse=function(t){t.preventDefault();var r=e.state.current,n=e.state.courses;n.push({name:r}),e.setState({courses:n,current:""})},e.deleteCourse=function(t){var r=e.state.courses;r.splice(t,1),e.setState({courses:r})},e.editCourse=function(t,r){var n=e.state.courses;n[t].name=r,e.setState({courses:n})},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this,t=this.state.courses.map((function(t,r){return Object(d.jsx)(j,{details:t,index:r,update:e.handleChange,deleteCourse:e.deleteCourse,editCourse:e.editCourse},r)}));return Object(d.jsxs)("section",{className:"App",children:[Object(d.jsx)("h2",{children:"Add Course"}),Object(d.jsx)(l,{current:this.state.current,updateCourse:this.updateCourse,addCourse:this.addCourse}),Object(d.jsx)("ul",{children:t})]})}}]),r}(n.Component),b=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(b,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.414e30b2.chunk.js.map