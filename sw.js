importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");self.addEventListener("widgetinstall",t=>{t.waitUntil(e(t))});self.addEventListener("widgetresume",t=>{t.waitUntil(e(t))});self.addEventListener("widgetclick",t=>{t.action=="updateName"&&t.waitUntil(s(t))});self.addEventListener("widgetuninstall",t=>{});const e=async t=>{const a=t.widget.definition,i={template:JSON.stringify(await(await fetch(a.msAcTemplate)).json()),data:JSON.stringify(await(await fetch(a.data)).json())};await self.widgets.updateByInstanceId(t.instanceId,i)},s=async t=>{const a=t.data.json().name,i=t.widget.definition,n={template:JSON.stringify(await(await fetch(i.msAcTemplate)).json()),data:JSON.stringify({name:a})};await self.widgets.updateByInstanceId(t.instanceId,n)};workbox.precaching.precacheAndRoute([{"revision":"fe970448513b18d0c37b4b671ca94a06","url":"assets/icons/192x192.png"},{"revision":"5b1c195400df0f16c3f6cb2aa4665622","url":"assets/icons/24x24.png"},{"revision":"c3f013b68eae92565e8337ee50472cdc","url":"assets/icons/48x48.png"},{"revision":"e2a009c0f6aaa11d03a8e0728869b583","url":"assets/icons/512x512.png"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icons/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icons/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icons/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icons/icon_512.png"},{"revision":"ee332fabed8b56f4aae86902c18146a2","url":"assets/readme/build-output.png"},{"revision":"be7f5a61d03a119f2e297d15df7dfab2","url":"assets/readme/codespace-button.png"},{"revision":"969196419238157c3d673545c2daed32","url":"assets/readme/copy-starter.png"},{"revision":"65897273261e49c6c9148df875e13e4d","url":"assets/readme/git-clone.png"},{"revision":"cd10ec0be4be4b10195986d075904542","url":"assets/readme/intro.png"},{"revision":"1b40f28a11a334cc90e6802070b9eae1","url":"assets/readme/local-button.png"},{"revision":"184b8b88c43aa759948968f69251200e","url":"assets/readme/new-repo-from-starter.png"},{"revision":"a5a5ef96823c312160626df383d0925d","url":"assets/readme/pwa-running.png"},{"revision":"480b506d1a2a832131525fd4d0fd7478","url":"assets/readme/pwa-starter-overview.png"},{"revision":"865934771530a3b8f9e10aae8d0423d9","url":"assets/readme/static-web-app-slash.png"},{"revision":"2d67dfcbdc3c8c6f8b5fefcd0016021f","url":"assets/readme/use-this-template.png"},{"revision":"fc3d41a79144a5bb00a423b78ec73c1f","url":"assets/readme/vscode-in-browser.png"},{"revision":"808ac8889e4c17f3f83fd9235f1aa28d","url":"assets/screenshots/screen.png"},{"revision":"bd2d64ab3b867df1017d43ec20b73cca","url":"assets/screenshots/widget-screen.png"},{"revision":null,"url":"code/app-about-HwmRp248.js"},{"revision":null,"url":"code/index-BOOyvc3G.css"},{"revision":null,"url":"code/index-CqHS4zRL.js"},{"revision":null,"url":"code/index-jNoTr7Jd.js"},{"revision":"19c22df6483f4e4b5312163f4975f4fc","url":"index.html"},{"revision":"74e47fbef3ad1c5ea3489795774cca8d","url":"manifest.json"},{"revision":"b1a4910d7cbaa47fcc8f72ecb2028ff1","url":"staticwebapp.config.json"},{"revision":"a7591c595c4a231a1f67943e58f3d6eb","url":"widget/ac.json"},{"revision":"a70ebb50d5f5ab6a37f24795e292547d","url":"widget/data.json"}]||[]);
//# sourceMappingURL=sw.js.map
