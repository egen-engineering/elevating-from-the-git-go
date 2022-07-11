(self.webpackChunkelevating_from_the_git_go=self.webpackChunkelevating_from_the_git_go||[]).push([[737],{58187:(i,e,l)=>{"use strict";l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>I,default:()=>o,frontMatter:()=>Z,metadata:()=>m,toc:()=>n});var a=l(87462),t=(l(67294),l(3905)),d=l(93456);const Z={sidebar_position:1},I="Introduction",m={unversionedId:"patterns/retail/introduction",id:"patterns/retail/introduction",title:"Introduction",description:"What's common between a person making a sandwich at home versus a gourmet chef preparing Thai curry? They both need fire, salt and a kitchen to cook!",source:"@site/docs/patterns/retail/introduction.md",sourceDirName:"patterns/retail",slug:"/patterns/retail/introduction",permalink:"/elevating-from-the-git-go/docs/patterns/retail/introduction",draft:!1,editUrl:"https://github.com/egen-engineering/elevating-from-the-git-go/docs/patterns/retail/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Retail",permalink:"/elevating-from-the-git-go/docs/category/retail"},next:{title:"Wireframes",permalink:"/elevating-from-the-git-go/docs/patterns/retail/store-admin/wireframes"}},c={},n=[{value:"Anatomy of a retail experience",id:"anatomy-of-a-retail-experience",level:2},{value:"ER diagram",id:"er-diagram",level:3}],b={toc:n};function o(i){let{components:e,...Z}=i;return(0,t.kt)("wrapper",(0,a.Z)({},b,Z,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"introduction"},"Introduction"),(0,t.kt)("p",null,"What's common between a person making a sandwich at home versus a gourmet chef preparing Thai curry? They both need fire, salt and a kitchen to cook!"),(0,t.kt)("p",null,"When working with retail clients, we find that though they all have a distinctive set of experiences that they wish to manifest in the market, there are some ingredients that almost all of them require."),(0,t.kt)("h2",{id:"anatomy-of-a-retail-experience"},"Anatomy of a retail experience"),(0,t.kt)("p",null,(0,t.kt)("img",{src:l(98885).Z,width:"811",height:"791"})),(0,t.kt)("p",null,"The diagram provides a high level view of what constitutes in a retail experience."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"A retail customer places an order to purchase products from a retail store. For this, the ",(0,t.kt)("em",{parentName:"li"},"interface")," or the medium of interaction can be an e-commerce / online storefront app, or by physically visiting a store, or often even both (buy online, pickup in store)."),(0,t.kt)("li",{parentName:"ol"},"The store employee preps the order, usually with a handheld interface of their own. Depending on the scale of operations of the store, it might be a simple barcode scanner, or a device running software with several sophisticated features to optimize the prep process."),(0,t.kt)("li",{parentName:"ol"},"Between the customer and employee lies a customer-support / ticket-resolution interface to streamline and resolve customer issues."),(0,t.kt)("li",{parentName:"ol"},"An admin portal portal integrates the data from the above 3 flows and lays out their operations for an admin / facilitator.")),(0,t.kt)("p",null,"For a large scale retail, the above components can be quite sophisticated, with each of the above interfaces having their own set of flows. How does that look like?"),(0,t.kt)("p",null,"The following ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"},"entity-relationship diagram")," succintly captures all inter-related things of interest in an ",(0,t.kt)("strong",{parentName:"p"},"order-fulfillment")," scenario - a use-case of several of our large-scale retail clients:"),(0,t.kt)("h3",{id:"er-diagram"},"ER diagram"),(0,t.kt)(d.Mermaid,{config:{},chart:'erDiagram\n    Customer ||--|{ Order : "places / collects"\n    Order ||--|{ Product : contains\n    Order ||--|{ Picks : requires\n    Batch ||--|{ Picks : "consists of"\n    Shopper ||--o{ Batch : stages\n    Facilitator ||--|{ Shopper : facilitates\n     \n    Retail-enterprise ||--|{ Store : has\n    Retail-enterprise ||--|{ Employee : has\n\n    Employee ||--|{ Admin : is\n    Employee ||--|{ Shopper : is\n    Employee ||--|| Facilitator : is\n    Admin ||--|{ Store : manages\n  \n    Store ||--|{ Shopper : has\n    Store ||--|{ Facilitator : has\n    Store ||--|{ Product : sells',mdxType:"Mermaid"}),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Every large-scale retailer consists of at-least one (or many) ",(0,t.kt)("em",{parentName:"li"},"stores")," and ",(0,t.kt)("em",{parentName:"li"},"employees"),"."),(0,t.kt)("li",{parentName:"ol"},"An ",(0,t.kt)("em",{parentName:"li"},"employee")," can be a",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"administrator"),": Someone who oversees the operations of one or many stores"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"shopper"),": working in an individual store and ensures the picking and staging of customer orders."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"facilitator"),": To facilitate the shopper"))),(0,t.kt)("li",{parentName:"ol"},"A ",(0,t.kt)("em",{parentName:"li"},"customer")," places an ",(0,t.kt)("em",{parentName:"li"},"order"),", and picks a time-slot when their order to be ready."),(0,t.kt)("li",{parentName:"ol"},"The shopper ",(0,t.kt)("em",{parentName:"li"},"picks")," up products to fulfil orders. Multiple orders can be clubbed together into ",(0,t.kt)("em",{parentName:"li"},"batches")," to ensure a speedier and efficient picking process.")))}o.isMDXComponent=!0},11748:(i,e,l)=>{var a={"./locale":89234,"./locale.js":89234};function t(i){var e=d(i);return l(e)}function d(i){if(!l.o(a,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return a[i]}t.keys=function(){return Object.keys(a)},t.resolve=d,i.exports=t,t.id=11748},98885:(i,e,l)=>{"use strict";l.d(e,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI4MTFweCIgaGVpZ2h0PSI3OTFweCIgdmlld0JveD0iLTAuNSAtMC41IDgxMSA3OTEiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjItMDYtMjlUMDk6MDU6MTMuMTc3WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFgxMSkmcXVvdDsgZXRhZz0mcXVvdDtoU1JHWG5OcFUxMnFmVnBrSDFVaiZxdW90OyB2ZXJzaW9uPSZxdW90OzIwLjAuMyZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyBwYWdlcz0mcXVvdDsyJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90OzMyMjhlMjllLTcxNTgtMTMxNS0zOGRmLTg0NTBkYjFkOGExZCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDszWmZQcjZJd0VNZi9HcTRiYUFIaHFLNit2V3oyNEdIUEZTbzBscGJVK212LytwMUNVYlM4eE0zekdkNGFZdHFaNmRCK3ZtVW9IcDVYcHpkRjZ2S256Q24za0orZlBQemRReWdJRWZMTTVlZm4xcElndnpVVWl1VTI2R3BZc1QvVUdydXdQY3ZwN2laUVM4azFxMitObVJTQ1p2ckdScFNTeDl1d2plUzNkNjFKUVIzREtpUGN0ZjVtdVM2dE5ZalRxK01IWlVXcHUvVk5Xc2VhWk50Q3liMnc5eE5TME5aVGtTNk5YZU91SkxrODlreDQ0ZUc1a2xLM3JlbzBwOXhnN1lpMTQ1YnZlQzlUVmxUb1J3YWdJTUoyMElId3ZWMjVuWnMrZHloZ0VGQ0h6bXpET0o5TExsWGp3RXMvbWZnUjJHVk5NcWFOMHJFUDNaMVdja3U3d0FZQW5wVzY0dEFMVEJvcGREOU44d083Ty85dWRsUnBldXFaN0hyZXFLeW9WbWNJc1Y2TTAyOVJPOGh1UE93bm5lVjRGVEx5clFabFQ4T0xrZGpOVTF6eVh5bEN3NEo4SHlyNkFOUUFUYWV6Y1VFTkp2ZFFnOWN6eFI5Z1NwTW9EdEdvbUliSkNKaUdEdE9WbG9vNllHRk4ydUt3bFJxRjBDZWNGUUk2R1dDZ3dHaG1scytnaGs2dG8ySjV6bC9IRktYM1RLRXVEMEFOMGdHb2t5Y3hqUnltOC8xT1F5NzFWYkhHWThBYU8xZ1hWYzNsbVg3WjNSbzZXS1BvNVZnbkExVTE1Z1pmemc3UUxFenpsK0RNSEdJQU1sU0hqUUltbmpsYUxMdFlhUGJDQnpLc0ZjdTJ6WmlZVkxVUm8vazNoeUtwTkZIZGtMVzZUM0tmZWxoclI5c0hKT3p0anlCK2pxUlI3QlQxZEVqU2NFRFI4RW1LSm82aUpSRjVTZUg4QzZkeGVtRFp1MC9NU0NpRzRUM0ZjUERkK0prVTAwZWVpK3hTMlAzZHZxNWhKLy9qWXdIbFowczFFOFYvc3YvZE44WExsZXZTOUpTYjVoVVRabW1tMVBDUkkzUkxDQTQvRVNGMHI5K2JqYS8zUFk4WGZ3RT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7WlpvbDh0ckdCSjJzVUgzTFhld1kmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTImcXVvdDsmZ3Q7ZFpFOUQ0SXdFSVovVFhkc05iTGoxK0xFNE54d0oyMVNPRkpxUUgrOWtMWmlneVlkcnMrOTk4MUUwWXhuS3p0MUpVRERlQVlqRXdmRytXYkxPWnRmQms5UGNwNTVVRnNOUWJTQVVyOHd3Q2g3YU1BK0VUb2k0M1NYd29yYUZpdVhNR2t0RGFuc1RpYXQyc2thVjZDc3BGblRtd2FuNGhUN2hWOVExeXBVM3VYQ094b1p0V0dRWGttZzRRdUpJeE9GSlhMZWFzWUN6Ynk3dUJZZmQvcmovZlJsc1hVL0FpWmp5VDE5a2dPSjR4cz0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PGVsbGlwc2UgY3g9IjQxMC41IiBjeT0iNTQwLjUiIHJ4PSIyNTAiIHJ5PSIyNTAiIGZpbGwtb3BhY2l0eT0iMC42IiBmaWxsPSIjZjA4NzA1IiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZWxsaXBzZSBjeD0iMjUwLjUiIGN5PSIyNTAuNSIgcng9IjI1MCIgcnk9IjI1MCIgZmlsbC1vcGFjaXR5PSIwLjYiIGZpbGw9IiMxMmFhYjUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxlbGxpcHNlIGN4PSI1NjAuNSIgY3k9IjI1MC41IiByeD0iMjUwIiByeT0iMjUwIiBmaWxsLW9wYWNpdHk9IjAuNiIgZmlsbD0iI2U4NTY0MiIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTIwLjUiIHk9IjIxMC41IiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjcwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI0NnB4OyBtYXJnaW4tbGVmdDogMjE2cHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMjRweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPlN0b3JlPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjIxNiIgeT0iMjUzIiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjI0cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN0b3JlPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI1MjAuNSIgeT0iMjEwLjUiIHdpZHRoPSIxOTAiIGhlaWdodD0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjQ2cHg7IG1hcmdpbi1sZWZ0OiA2MTZweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyNHB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+Q3VzdG9tZXI8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjE2IiB5PSIyNTMiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjRweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q3VzdG9tZXI8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjMyMC41IiB5PSI1NDAuNSIgd2lkdGg9IjE5MCIgaGVpZ2h0PSI3MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA1NzZweDsgbWFyZ2luLWxlZnQ6IDQxNnB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICNGRkZGRkY7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDI0cHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5FbXBsb3llZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0MTYiIHk9IjU4MyIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyNHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbXBsb3llZTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMzkwLjUiIHk9IjE4MC41IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgZmxleC1zdGFydDsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDE4OHB4OyBtYXJnaW4tbGVmdDogNDExcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxkaXY+T25saW5lIHN0b3JlZnJvbnQgLzwvZGl2PjxkaXY+YnJpY2sgJmFtcDsgbW9ydGFyPGJyIC8+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQxMSIgeT0iMjA0IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjE2cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9ubGluLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyNzAuNSIgeT0iNDAwLjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNDA4cHg7IG1hcmdpbi1sZWZ0OiAyOTFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+aGFuZGhlbGQgZGV2aWNlPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjI5MSIgeT0iNDI0IiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjE2cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmhhbmRoLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI1MjAuNSIgeT0iNDAwLjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNDA4cHg7IG1hcmdpbi1sZWZ0OiA1NDFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+PGRpdj5jdXN0b21lciBzdXBwb3J0IC88L2Rpdj48ZGl2PnRpY2tldGluZzxiciAvPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI1NDEiIHk9IjQyNCIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxNnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jdXN0by4uLjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMzkwLjUiIHk9IjMzMC41IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgZmxleC1zdGFydDsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDMzOHB4OyBtYXJnaW4tbGVmdDogNDExcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyIgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPkFkbWluIHBvcnRhbDwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0MTEiIHk9IjM1NCIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxNnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BZG1pbi4uLjwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5UZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"}}]);