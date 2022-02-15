import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
args["call"];
const call = args.call;
if (call == null) console.log("Error: no input.");
//else if (call != 'heads' && call != 'tails') console.log("Error: bad input.");
else console.log(flipACoin(call)); 