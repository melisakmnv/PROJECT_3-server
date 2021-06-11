(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(31),i=n.n(c),l=n(2),r=n(9),o=(n(37),n(0)),j=function(){return Object(o.jsx)("aside",{children:Object(o.jsxs)("ul",{className:"NavBar__List",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.c,{className:"NavBar__Item",exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.c,{className:"NavBar__Item",exact:!0,to:"/plants",children:"Plants"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.c,{className:"NavBar__Item",exact:!0,to:"/recipes",children:"Recipes"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.c,{className:"NavBar__Item",exact:!0,to:"/account",children:"Account"})})]})})},d=(n(44),function(){return Object(o.jsx)("div",{class:"main-container",children:Object(o.jsxs)("div",{class:"homepage-container",children:[Object(o.jsx)("img",{class:"site-logo",src:"https://u.cubeupload.com/Sono/LogoPrincipal.png"}),Object(o.jsx)("div",{class:"homepage-content",children:Object(o.jsxs)("p",{children:["Dandelion Project est un projet de partage sur les plantes sauvages et leur potentiel culinaire. Nos membres sont des explorateurs du monde v\xe9g\xe9tal, en qu\xeate de parfums et de saveurs insoupsonn\xe9s. Sans cesse nous partageons nos impressions sur les plantes qui viennent \xe0 notre rencontre. Nous souhaitons vous faire d\xe9couvrir ces plantes que vous croisez tous les jours sans les voir, sur votre trajet ou en balade.",Object(o.jsx)("img",{class:"loupe-img ",src:"https://u.cubeupload.com/Sono/24bloupelogo.png"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Pour les adeptes de la cuisine sauvage, c'est un espace d'expression pour \xe9changer des connaissances rares et confidentiels. Peu de gens savent que le Gaillet croisette infus\xe9 exhale une odeur de miel. Ou encore que la Ache aquatique cisel\xe9 remplace le persil \xe0 merveille.",Object(o.jsx)("br",{}),"  ",Object(o.jsx)("br",{}),"Pour les n\xe9ophytes c'est l'occasion de d\xe9couvrir le vaste monde des plantes sauvages. "]})})]})})}),h=n(14),p=n(4),u=n(5),b=n(7),m=n(6),O=n(8),x=n.n(O),v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={plantName:"",nameLatin:"",species:"",family:"",description:"",image:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(h.a)({},a,s))},e.handleFileUpload=function(t){console.log("the new file upload is :",t.target.files[0]),(new FormData).append("image",t.target.files[0]),x.a.post("http://localhost:5555/api/plants").then((function(t){console.log(t.data),e.setState({image:t.data})})).catch((function(e){console.log(e)}))},e.handleSubmit=function(t){var n={plantName:e.state.plantName,nameLatin:e.state.nameLatin,species:e.state.species,family:e.state.family,description:e.state.description,image:e.state.image};x.a.post("http://localhost:5555/api/plants",n).then((function(t){console.log(t.data.newPlant),e.setState({plantName:"",nameLatin:"",species:"",family:"",description:""})})).catch((function(e){console.log(e)})),t.preventDefault(),console.log("clickeddd")},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"plantName",children:"Nom de la plante"}),Object(o.jsx)("input",{type:"text",name:"plantName",id:"plantName",value:this.state.plantName,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"nameLatin",children:" Nom latin "}),Object(o.jsx)("input",{type:"text",name:"nameLatin",id:"nameLatin",value:this.state.nameLatin,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"species",children:" Esp\xe8ce "}),Object(o.jsx)("input",{type:"text",name:"species",id:"species",value:this.state.species,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"family",children:" Famille "}),Object(o.jsx)("input",{type:"text",name:"family",id:"family",value:this.state.family,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"description",children:" Description "}),Object(o.jsx)("textarea",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),Object(o.jsx)("button",{children:"Submit"})]})})}}]),n}(a.Component),g=(n(63),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={plantName:"",nameLatin:"",species:"",family:"",description:"",image:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(h.a)({},a,s))},e.handleSubmit=function(t){var n=e.props.match.params.plantId,a={plantName:e.state.plantName,nameLatin:e.state.nameLatin,species:e.state.species,family:e.state.family,description:e.state.description};x.a.patch("http://localhost:5555/api/plants/"+n,a).then((function(e){console.log(e.data.documents),console.log("updated successfully")})).catch((function(e){console.log(e)})),e.props.history.push("/plants"),t.preventDefault(),console.log("clickeddd")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;x.a.get("http://localhost:5555/api/plants/"+t).then((function(t){e.setState({plantName:t.data.documents.plantName,nameLatin:t.data.documents.nameLatin,species:t.data.documents.species,family:t.data.documents.family,description:t.data.documents.description})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Ajouter une nouvelle plante :) "}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"plantName",children:" Plant Name "}),Object(o.jsx)("input",{type:"text",name:"plantName",id:"plantName",value:this.state.plantName,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"nameLatin",children:" Latin Name "}),Object(o.jsx)("input",{type:"text",name:"nameLatin",id:"nameLatin",value:this.state.nameLatin,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"species",children:" Species "}),Object(o.jsx)("input",{type:"text",name:"species",id:"species",value:this.state.species,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"family",children:" Family "}),Object(o.jsx)("input",{type:"text",name:"family",id:"family",value:this.state.family,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"description",children:" Description "}),Object(o.jsx)("textarea",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),Object(o.jsx)("button",{children:"Submit"})]})]})}}]),n}(a.Component)),f=function(e){var t=e.namePart,n=(e._id,e.descriptionPart);e.handleEdit,e.handleDelete;return Object(o.jsx)("div",{className:"Card__Container",children:Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsxs)("div",{className:"Head__Card",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("h1",{children:e.plantProps.plantName}),Object(o.jsx)("h2",{children:e.plantProps.nameLatin})]}),Object(o.jsxs)("div",{className:"Content__Container",children:[Object(o.jsxs)("div",{className:"Content__Card",children:[Object(o.jsx)("div",{class:"all-pictures",children:Object(o.jsx)("img",{class:"main-picture",src:"https://st4.depositphotos.com/2370557/30365/i/1600/depositphotos_303653812-stock-photo-fresh-basil-plant-with-green.jpg",alt:""})}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("div",{class:"card-botanique",children:Object(o.jsx)("h3",{children:"Botanique"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Famille :"})," ",Object(o.jsx)("p",{children:e.plantProps.family})," "]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Nom en latin :"})," ",Object(o.jsx)("p",{children:e.plantProps.nameLatin})," "]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Saisons :"})," ",Object(o.jsx)("p",{children:"_____ "})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"cuisine card-ideas",children:[Object(o.jsx)("h3",{children:"Id\xe9es Cuisines"}),Object(o.jsxs)("div",{class:"cuisine-icons",children:[Object(o.jsx)("img",{src:"https://u.cubeupload.com/Sono/PESTO.png",alt:""}),Object(o.jsx)("img",{src:"https://u.cubeupload.com/Sono/SALADE.png",alt:""}),Object(o.jsx)("img",{src:"https://u.cubeupload.com/Sono/OMELETTE.png",alt:""}),Object(o.jsx)("img",{src:"https://u.cubeupload.com/Sono/ASSAISONEMENT.png",alt:""})]})]}),Object(o.jsxs)("div",{className:"cuisine card-tastes",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("h3",{children:"Saveurs & Textures"}),Object(o.jsxs)("div",{class:"parfums",children:[Object(o.jsx)("h4",{children:"Parfums :"})," ",Object(o.jsx)("p",{children:"citronnelle"})," ",Object(o.jsx)("p",{children:"agrume"})," ",Object(o.jsx)("p",{children:"menthe"})," ",Object(o.jsx)("p",{children:"musqu\xe9"})," ",Object(o.jsx)("p",{children:"herbac\xe9"})]}),Object(o.jsxs)("div",{class:"tastes",children:[Object(o.jsx)("h4",{children:"Go\xfbts :"})," ",Object(o.jsx)("p",{children:"neutre"})," ",Object(o.jsx)("p",{children:"poivr\xe9"})]}),Object(o.jsxs)("div",{class:"textures",children:[Object(o.jsx)("h4",{children:"Textures :"})," ",Object(o.jsx)("p",{children:"tendre"})]})]}),Object(o.jsxs)("div",{className:"card-links",children:[Object(o.jsx)("h3",{children:"Sources et liens"}),Object(o.jsxs)("div",{class:"wiki-cuisine-sauvage",children:[Object(o.jsx)("a",{id:"wikipedia",href:"#",target:"_blank",children:"Wikipedia"}),Object(o.jsx)("a",{id:"cuisine-sauvage",href:"#",target:"_blank",children:"Cuisine-Sauvage"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{children:Object(o.jsx)("button",{children:"Edit"})}),Object(o.jsx)(r.b,{children:Object(o.jsx)("button",{children:"Delete"})})]})]})]})]})})},_=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={plant:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;x.a.get("http://localhost:5555/api/plants/"+t).then((function(t){console.log(t.data.documents),e.setState({plant:t.data.documents})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"One__Card",children:this.state.plant&&Object(o.jsx)(f,{plantProps:this.state.plant})})}}]),n}(a.Component),N=(n(19),function(e){var t=e.plant;return Object(o.jsx)("div",{className:"Plant__Card",children:Object(o.jsx)(r.b,{className:"Link",to:"/plants/".concat(t._id),children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"Plant__Image"}),Object(o.jsx)("div",{className:"Plant__name",children:Object(o.jsx)("h2",{children:t.plantName})})]})})})});console.log("http://localhost:5555");var y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={plants:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:5555/api/plants").then((function(t){console.log(t),e.setState({plants:t.data.plants})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"Plant__Card__Box",children:this.state.plants.map((function(e){return Object(o.jsx)(N,{plant:e},e._id)}))})}}]),n}(a.Component),C=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{}),Object(o.jsx)(y,{})]})},S=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={recipeName:"",ingredients:"",duration:"",step:"",picture:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(h.a)({},a,s))},e.handleSubmit=function(t){var n={recipeName:e.state.recipeName,ingredients:e.state.ingredients,duration:e.state.duration,step:e.state.step,picture:e.state.picture};x.a.post("http://localhost:5555/api/recipes",n).then((function(t){console.log(t.data.newRecipe),e.setState({recipeName:"",ingredients:"",duration:"",step:"",picture:""})})).catch((function(e){console.log(e)})),t.preventDefault(),console.log("adddeeddededed")},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"recipeName",children:" Recipe Name "}),Object(o.jsx)("input",{type:"text",name:"recipeName",id:"recipeName",value:this.state.recipeName,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"ingredients",children:" Ingredients "}),Object(o.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",value:this.state.ingredients,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"duration",children:" Duration "}),Object(o.jsx)("input",{type:"number",name:"duration",id:"duration",value:this.state.duration,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"step",children:" steps "}),Object(o.jsx)("input",{type:"text",name:"step",id:"step",value:this.state.step,onChange:this.handleChange}),Object(o.jsx)("button",{children:"Submit"})]})})}}]),n}(a.Component);x.a.create({baseURL:"http://localhost:5555",withCredentials:!0});var P=function(e){var t=e.recipe;return Object(o.jsx)("div",{className:"Plant__Card",children:Object(o.jsx)(r.b,{className:"Link",to:"/recipes/".concat(t._id),children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"Plant__Image"}),Object(o.jsx)("h2",{children:t.recipeName})]})})})},w=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={recipes:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:5555/api/recipes").then((function(t){console.log(t),e.setState({recipes:t.data.recipes})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"Plant__Card__Box",children:this.state.recipes.map((function(e){return Object(o.jsx)(P,{recipe:e},e._id)}))})}}]),n}(a.Component),F=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Hello from Recipe"}),Object(o.jsx)(S,{}),Object(o.jsx)(w,{})]})},k=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:""},e.handleChange=function(e){},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Connexion"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{htmlFor:"email",children:" Email "}),Object(o.jsx)("input",{type:"text",name:"email"}),Object(o.jsx)("label",{htmlFor:"password",children:" Password "}),Object(o.jsx)("input",{type:"password",name:"password"}),Object(o.jsx)("button",{children:"Connexion"})]})]})}}]),n}(a.Component),L=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(h.a)({},a,n))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Nous rejoindre"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{htmlFor:"username",children:" Username "}),Object(o.jsx)("input",{type:"text",name:"username",id:"username"}),Object(o.jsx)("label",{htmlFor:"email",children:" Email "}),Object(o.jsx)("input",{type:"email",name:"email",id:"email"}),Object(o.jsx)("label",{htmlFor:"password",children:" Password "}),Object(o.jsx)("input",{type:"password",name:"password",id:"password"}),Object(o.jsx)("button",{children:" S'inscrire "})]})]})}}]),n}(a.Component),I=(n(64),function(){return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)("div",{className:"account-container"}),Object(o.jsx)("div",{className:"login-bx"}),Object(o.jsx)(k,{}),Object(o.jsx)("div",{className:"signup-box"}),Object(o.jsx)(L,{})]})}),A=function(e){return Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("div",{className:"Head__Card",children:Object(o.jsx)("h1",{children:e.recipeProps.recipeName})}),Object(o.jsxs)("div",{className:"Recap__Card",children:[Object(o.jsx)("img",{}),Object(o.jsx)("p",{children:"Ingr\xe9dients"}),Object(o.jsxs)("p",{children:["Famille : ",e.recipeProps.ingredients]}),Object(o.jsx)("p",{children:"Saison : _____ "})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"Content__Card",children:[Object(o.jsx)("p",{children:"Id\xe9es Cuisine TAG RECIPE GOES HERE"}),Object(o.jsxs)("p",{children:["Famille : ",e.recipeProps.family]}),Object(o.jsx)("p",{children:"Saison : _____ "})]}),Object(o.jsxs)("div",{className:"Content__Card",children:[Object(o.jsx)("p",{children:"Saveurs et odeurs"}),Object(o.jsx)("p",{children:"Famille : "}),Object(o.jsx)("p",{children:"Saison : _____ "})]}),Object(o.jsxs)("div",{className:"Content__Card",children:[Object(o.jsx)("p",{children:"Sources et liens"}),Object(o.jsx)("p",{children:"Famille : "}),Object(o.jsx)("p",{children:"Saison : _____ "})]})]})},E=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={recipe:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.recipeId;x.a.get("http://localhost:5555/api/recipes/"+t).then((function(t){console.log("response >>>>> "),console.log(t.data.documents),e.setState({recipe:t.data.documents})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"One__Card",children:[Object(o.jsx)("p",{children:"Hello card recipe"}),this.state.recipe&&Object(o.jsx)(A,{recipeProps:this.state.recipe})]})}}]),n}(a.Component);var D=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(o.jsx)(l.a,{exact:!0,path:"/plants",component:C}),Object(o.jsx)(l.a,{exact:!0,path:"/plants/:plantId",component:_}),Object(o.jsx)(l.a,{exact:!0,path:"/plants/:plantId",component:g}),Object(o.jsx)(l.a,{exact:!0,path:"/recipes",component:F}),Object(o.jsx)(l.a,{exact:!0,path:"/recipes/:recipeId",component:E}),Object(o.jsx)(l.a,{exact:!0,path:"/account",component:I})]}),Object(o.jsx)(j,{})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(D,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f41353c0.chunk.js.map