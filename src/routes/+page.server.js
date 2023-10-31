import { writeFile } from 'node:fs/promises';
import { extname } from 'path';

/** @type {import('./$types').Actions} */
export const actions = {
	upload: async ({ request }) => {
		console.log("request",request);
		console.log("BEGIN /upload");
		const data = await request.formData();
		console.log("data",data);
		const file = data.getAll('filepond');
		console.log(file[1]);
		const filename = `upload/${crypto.randomUUID()}${extname(file[1]?.name)}`;
    	await writeFile(filename, Buffer.from(await file[1]?.arrayBuffer()));

   		return { success: true };
	}
};