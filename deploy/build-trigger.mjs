import { exec } from "node:child_process";

exec("npm run pages:build", async (err) => {
	console.log(
		err
			? `Something went wrong when running cloudflare:pages, exited with error code: ${err.code}`
			: "cloudflare:pages build successfully!",
	);

	const res = await fetch(
		"https://webhooks.datocms.com/3IhDHabeQI/deploy-results",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: err ? "error" : "success" }),
		},
	);

	console.log(
		res.ok
			? "DatoCMS received the status correctly"
			: `Something went wrong when sending the status to DatoCMS, response code: ${res.status}`,
	);
});
