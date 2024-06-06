import{i as o,P as l,x as h,a as c,t as f}from"./index-DcatTtSZ.js";import{D as p,G as w}from"./diet-page-DsUEyJ7J.js";const D=o`
  :host {
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    overflow: hidden;
  }
`;var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,E=(e,t,a,i)=>{for(var s=i>1?void 0:i?m(t,a):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(s=(i?d(t,a,s):d(s))||s);return i&&s&&y(t,a,s),s};let r=class extends p{constructor(){super(...arguments),this.expandOnSelectDate=!1}async firstUpdated(){await this.LoadEntries(),await this.AddListeners()}async AddListeners(){this.addEventListener("on-show-food-drawer",e=>{const t=e.detail;t.addFood?(this.foodDrawer.ShowSelection(e),this._selectedTime=l.Now.plainTimeISO()):t.addEntry&&this.foodDrawer.ShowFoodEntryForm(e)}),this.addEventListener("shorten-food-drawer",e=>{this.foodDrawer.ExpandDrawer(this.expandOnSelectDate),this.expandOnSelectDate=!this.expandOnSelectDate}),this.addEventListener("food-entry-saved",async()=>{await this.LoadEntries()}),this.addEventListener("time-selected",async e=>{const t=e.detail.time;this._selectedTime=t}),this.addEventListener("day-selected",async e=>{this.expandOnSelectDate&&(this.foodDrawer.ExpandDrawer(),this.expandOnSelectDate=!1);const t=e.detail;this._selectedDate=t,await this.LoadEntries()})}async LoadEntries(){this._dailyEntries=await w(this._selectedDate)}RenderContent(){return h` <food-entry-timeline></food-entry-timeline> `}};r.styles=[c,D];r=E([f("diet-timeline")],r);export{r as DietTimeline};
