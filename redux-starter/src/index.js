import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionStructure';

const unsubscribe=store.subscribe(()=>{
    console.log("State changed",store.getState());
})
store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
