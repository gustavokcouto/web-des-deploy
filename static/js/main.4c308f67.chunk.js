(this["webpackJsonpweb-des"]=this["webpackJsonpweb-des"]||[]).push([[0],{13:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},19:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),d=n.n(a),l=n(5),c=n.n(l),o=(n(18),n(6)),s=n(7),i=n(11),r=n(8),u=n(1),g=n(12),v=(n(19),n(9)),E=n.n(v),h=n(10),m=n.n(h),b=n(3),p=n.n(b);p.a.use(E.a),p.a.use(m.a);var f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).componentDidMount=function(){n.initCytoscape()},n.initCytoscape=function(){n.cy=window.cy=p()({container:document.getElementById("cy"),ready:function(){},style:[{selector:"node[name]",css:{content:"data(name)"}},{selector:"edge",style:{"curve-style":"bezier","target-arrow-shape":"triangle"}},{selector:".eh-handle",style:{width:0,height:0}},{selector:".eh-hover",style:{"background-color":"red"}},{selector:".eh-source",style:{"border-width":2,"border-color":"red"}},{selector:".eh-target",style:{"border-width":2,"border-color":"red"}},{selector:".eh-preview, .eh-ghost-edge",style:{"background-color":"red","line-color":"red","target-arrow-color":"red","source-arrow-color":"red"}},{selector:".eh-ghost-edge.eh-preview-active",style:{opacity:0}},{selector:"node[label]",style:{label:"data(label)"}},{selector:"edge[label]",style:{label:"data(label)",width:3}},{selector:".top-left",style:{"text-valign":"top","text-halign":"left"}},{selector:".top-center",style:{"text-valign":"top","text-halign":"center"}},{selector:".top-right",style:{"text-valign":"top","text-halign":"right"}},{selector:".center-left",style:{"text-valign":"center","text-halign":"left"}},{selector:".center-center",style:{"text-valign":"center","text-halign":"center"}},{selector:".center-right",style:{"text-valign":"center","text-halign":"right"}},{selector:".bottom-left",style:{"text-valign":"bottom","text-halign":"left"}},{selector:".bottom-center",style:{"text-valign":"bottom","text-halign":"center"}},{selector:".bottom-right",style:{"text-valign":"bottom","text-halign":"right"}},{selector:".multiline-manual",style:{"text-wrap":"wrap"}},{selector:".multiline-auto",style:{"text-wrap":"wrap","text-max-width":80}},{selector:".autorotate",style:{"edge-text-rotation":"autorotate"}},{selector:".background",style:{"text-background-opacity":1,color:"#fff","text-background-color":"#888","text-background-shape":"roundrectangle","text-border-color":"#000","text-border-width":1,"text-border-opacity":1}},{selector:".outline",style:{color:"#fff","text-outline-color":"#888","text-outline-width":3}}],elements:{nodes:n.state.nodes.map((function(e){return{data:{id:e.id},position:{x:e.x_position,y:e.y_position}}})),edges:n.state.edges.map((function(e){return{data:{source:e.source,target:e.target}}}))}}),n.eh=n.cy.edgehandles({handleNodes:"node",handleInDrawMode:!1,edgeType:function(e,t){return"flat"},loopAllowed:function(e){return!0},edgeParams:n.addEdgeEvent}),n.cy.nodeHtmlLabel([{tpl:function(){return""}}]),n.setUpListeners()},n.setUpListeners=function(){n.cy.on("tap",n.addNodeEvent),n.cy.on("add","node",(function(e){if(e.target.id().includes("node_")){var t=Object.assign({},n.state),a={id:e.target.id(),x_position:e.target.position("x"),y_position:e.target.position("y")};t.nodes.push(a),n.setState(t)}})),n.cy.on("add","edge",(function(e){if(e.target.id().includes("edge_")){var t=Object.assign({},n.state),a={id:e.target.id(),source:e.target.source().id(),target:e.target.target().id(),eventNames:[]};console.log(a),t.edges.push(a),""===n.state.changeEdgeIdInput&&(t.changeEdgeIdInput=a.id),n.setState(t)}})),n.cy.nodes().on("click",(function(e){console.log("click on node")}))},n.addEdgeEvent=function(e,t){return{data:{id:"edge_"+n.state.edges.length,source:e.id(),target:t.id()},classes:"multiline-manual"}},n.addNodeEvent=function(e){n.state.addNode&&n.cy.add({group:"nodes",data:{id:"node_"+n.state.nodes.length,label:"node_"+n.state.nodes.length},renderedPosition:{x:e.renderedPosition.x,y:e.renderedPosition.y}})},n.handleAddEventNameChange=function(e){var t=Object.assign({},n.state);t.addEventNameInput=e.target.value,n.setState(t)},n.deleteEventChange=function(e){var t=Object.assign({},n.state);t.deleteEventInput=e.target.value,n.setState(t)},n.changeEdgeEventChange=function(e){var t=Object.assign({},n.state);t.changeEdgeEventInput=e.target.value,n.setState(t)},n.changeEdgeIdChange=function(e){var t=Object.assign({},n.state);t.changeEdgeIdInput=e.target.value,n.setState(t)},n.clickSelect=function(){var e=Object.assign({},n.state);e.select=!e.select,e.addEdge=!1,e.addNode=!1,n.setState(e)},n.clickAddNodeButton=function(){var e=Object.assign({},n.state);e.addNode=!e.addNode,e.addEdge=!1,e.select=!1,n.setState(e)},n.clickAddEdgeButton=function(){var e=Object.assign({},n.state);e.addEdge=!e.addEdge,e.addNode=!1,e.select=!1,n.setState(e)},n.clickAddEventButton=function(){var e=Object.assign({},n.state);e.events.push({name:n.state.addEventNameInput}),e.addEventNameInput="",""===e.deleteEventInput&&(e.deleteEventInput=e.events[0].name),""===e.changeEdgeEventInput&&(e.changeEdgeEventInput=e.events[0].name),n.setState(e)},n.clickDeleteEventButton=function(){var e=Object.assign({},n.state);e.events=n.state.events.filter((function(e){return e.name!==n.state.deleteEventInput})),e.events.length?e.deleteEventInput=e.events[0].name:e.deleteEventInput="",n.setState(e)},n.clickAddEventToEdgeButton=function(){var e=Object.assign({},n.state),t=n.state.edges.findIndex((function(e){return e.id===n.state.changeEdgeIdInput}));if(console.log("edgeIndex: "+t),-1!==t){e.edges[t].eventNames.push(n.state.changeEdgeEventInput);var a="";e.edges[t].eventNames.forEach((function(e,t){0!==t&&(a+="\n"),a+=e}));var d=n.cy.edges("#"+e.edges[t].id)[0];d&&(d.data("label",a),n.setState(e))}},n.clickRemoveEventFromEdgeButton=function(){var e=Object.assign({},n.state),t=n.state.edges.findIndex((function(e){return e.id===n.state.changeEdgeIdInput}));console.log("edgeIndex: "+t),-1!==t&&(e.edges[t].eventNames=e.edges[t].eventNames.filter((function(e){return e!==n.state.changeEdgeEventInput})),n.setState(e))},n.state={nodes:[],edges:[],events:[],w:0,h:0,addEventNameInput:"",deleteEventInput:"",changeEdgeEventInput:"",changeEdgeIdInput:""},n.addEdgeEvent=n.addEdgeEvent.bind(Object(u.a)(n)),n.addNodeEvent=n.addNodeEvent.bind(Object(u.a)(n)),n.clickAddNodeButton=n.clickAddNodeButton.bind(Object(u.a)(n)),n.clickAddEdgeButton=n.clickAddEdgeButton.bind(Object(u.a)(n)),n.clickAddEventButton=n.clickAddEventButton.bind(Object(u.a)(n)),n.handleAddEventNameChange=n.handleAddEventNameChange.bind(Object(u.a)(n)),n.deleteEventChange=n.deleteEventChange.bind(Object(u.a)(n)),n.clickDeleteEventButton=n.clickDeleteEventButton.bind(Object(u.a)(n)),n.changeEdgeEventChange=n.changeEdgeEventChange.bind(Object(u.a)(n)),n.clickRemoveEventFromEdgeButton=n.clickRemoveEventFromEdgeButton.bind(Object(u.a)(n)),n.changeEdgeIdChange=n.changeEdgeIdChange.bind(Object(u.a)(n)),n.clickRemoveEventFromEdgeButton=n.clickRemoveEventFromEdgeButton.bind(Object(u.a)(n)),n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){this.eh&&(this.state.addEdge?this.eh.enableDrawMode():(this.eh.disableDrawMode(),this.cy.autoungrabify(!1)));var e=this.state.nodes.map((function(e){return d.a.createElement("div",{key:e.id},"id: ",e.id)})),t=this.state.edges.map((function(e){return d.a.createElement("div",{key:e.id},d.a.createElement("div",null,"id: ",e.id),d.a.createElement("div",null,"source: ",e.source),d.a.createElement("div",null,"target: ",e.target),d.a.createElement("div",null,"events: ",e.eventNames.map((function(e){return d.a.createElement("div",{key:e},"name: ",e)}))))})),n=this.state.events.map((function(e){return d.a.createElement("div",{key:e.name},"name: ",e.name)}));return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("h1",null,"Automata:"),d.a.createElement("button",{onClick:this.clickSelect,className:"".concat(this.state.select?"selected":"")},"Select"),d.a.createElement("button",{onClick:this.clickAddNodeButton,className:"".concat(this.state.addNode?"selected":"")},"Add node"),d.a.createElement("button",{onClick:this.clickAddEdgeButton,className:"".concat(this.state.addEdge?"selected":"")},"Add edge"),d.a.createElement("div",{className:"cytoscapecanvas",id:"cy"}),d.a.createElement("div",null,"nodes: ",e),d.a.createElement("br",null),d.a.createElement("div",null,"edges: ",t),d.a.createElement("br",null),d.a.createElement("div",null,"events: ",n)),d.a.createElement("div",null,d.a.createElement("h3",null,"New event"),d.a.createElement("label",null,"Name:",d.a.createElement("input",{type:"text",id:"name",name:"name",value:this.state.addEventNameInput,onChange:this.handleAddEventNameChange})),d.a.createElement("br",null),d.a.createElement("button",{onClick:this.clickAddEventButton},"Add event")),d.a.createElement("div",null,d.a.createElement("h3",null,"Remove event"),d.a.createElement("label",null,"Name:",d.a.createElement("select",{value:this.state.deleteEventInput,onChange:this.deleteEventChange},this.state.events.map((function(e){return d.a.createElement("option",{value:e.name,key:e.name},e.name)})))),d.a.createElement("br",null),d.a.createElement("button",{onClick:this.clickDeleteEventButton},"Remove event")),d.a.createElement("div",null,d.a.createElement("h3",null,"Change edge"),d.a.createElement("label",null,"Event Name:",d.a.createElement("select",{value:this.state.changeEdgeEventInput,onChange:this.changeEdgeEventChange},this.state.events.map((function(e){return d.a.createElement("option",{value:e.name,key:e.name},e.name)})))),d.a.createElement("br",null),d.a.createElement("label",null,"Edge Id:",d.a.createElement("select",{value:this.state.changeEdgeIdInput,onChange:this.changeEdgeIdChange},this.state.edges.map((function(e){return d.a.createElement("option",{value:e.id,key:e.id},e.id)})))),d.a.createElement("br",null),d.a.createElement("button",{onClick:this.clickAddEventToEdgeButton},"Add event to edge"),d.a.createElement("br",null),d.a.createElement("button",{onClick:this.clickRemoveEventFromEdgeButton},"Remove event from edge")))}}]),t}(d.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(d.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4c308f67.chunk.js.map