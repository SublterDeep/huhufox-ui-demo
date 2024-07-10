const codeBlock = [

[
`<fox_slider :arrData="data"></fox_slider>`,
`export default {
data() {
  return {
    ['01', '02', '03', '04', '05', '06']
  }
},`,
],
[
`<fox_slider :autoScroll="false" :alwaysShowArrow="false" :arrData="data" :btnStyle="{arrowColor: '#f60', arrowColor_hover: 'black', groupColor_active: 'red'}" />`,
`export default {
data() {
  return {
    ['01', '02', '03', '04', '05', '06']
  }
},`
],
[
`<fox_slider :arrData="data" :borderRadius="'15px'" :showArrow="false" />`,
`export default {
data() {
  return {
    ['01', '02', '03']
  }
},`
],
[
`<fox_slider :arrData="data" :transitionTime="0.15" style="box-shadow: 20px 20px 20px" />`,
`export default {
data() {
  return {
    ['01', '02', '03']
  }
},`
],
[
`<fox_slider :arrData="<fox_slider :arrData="arrData_4" />" :borderRadius="'15px'" :showArrow="false" />`,
`export default {
data() {
  return {
    ['01']
  }
},`
],
[
`<fox_slider  />`,
``
],

];
export { codeBlock }