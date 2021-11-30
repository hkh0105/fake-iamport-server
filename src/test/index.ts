import { Backend } from "../Backend";

import { DynamicImportIterator } from "./internal/DynamicImportIterator";

async function main(): Promise<void>
{
    // BACKEND SERVER
    const backend: Backend = new Backend();
    await backend.open();

    // DO TEST
    const exceptions: Error[] = await DynamicImportIterator.force
    (
        __dirname + "/features", 
        {
            prefix: "test", 
            parameters: []
        }
    );

    // TERMINATE
    await backend.close();

    if (exceptions.length === 0)
        console.log("Success");
    else
    {
        for (const exp of exceptions)
            console.log(exp);
        process.exit(-1);
    }
}
main().catch(exp =>
{
    console.log(exp);
    process.exit(-1);
});