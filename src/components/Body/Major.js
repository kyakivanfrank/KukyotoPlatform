import React from 'react';
    import DictionaryEngine from "./Dictionary/DictionaryEngine";

    import Tabs from './inTheTabs/Tabs';
import TotemEngine from './InsidetheMajor/TotemEngine/TotemEngine';
const Major =(props)=> 

<div className="container flexa">
<div className="col-lg-8">
     <Tabs>
      <div label="Amannya ne miziro">
      <TotemEngine/>
      </div>
      <div label="Dikisonare yo Luganda">
      <DictionaryEngine/>
      </div>
    </Tabs>
    </div>
<div id="adboard" className="col-lg-4">
post ads here
</div>
    </div>
export default Major;

 