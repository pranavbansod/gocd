/*
 * Copyright 2018 ThoughtWorks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {MithrilComponent} from "jsx/mithril-component";
import * as m from 'mithril';
const ConfigReposList = require("views/config_repos/config_repos_list");
const ConfigRepos     = require("models/config_repos/config_repos");
const ReposListVM     = require("views/config_repos/models/repos_list_vm");

interface State {
  vm: any;
}

export class ConfigReposPage extends MithrilComponent<null, State> {
  oninit(vnode: m.Vnode<null, State>) {
    vnode.state.vm = new ReposListVM(new ConfigRepos()).load();
    vnode.state.vm.loadPlugins().then(() => m.redraw());
  }

  view(vnode: m.Vnode<null, State>) {
    return <ConfigReposList vm={vnode.state.vm}/>;
  }
}
