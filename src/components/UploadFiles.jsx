import { useCallback, useState } from "react";

const UploadFiles = () => {
	const [file, setFile] = useState(null);
	const setNewFile = useCallback((e) => {
		const localFile = e.target.files[0];
		setFile(localFile);
	}, []);

	const upload = useCallback((e) => {
		e.preventDefault();

		const formData = new FormData();
    	formData.append("file", file);

		fetch(`http://127.0.0.1:3001/upload/${file.name}`, {
			method: "post",
			body: file,
		});
	}, [file]);

	return (
		<div>
			<form method="post" onSubmit={upload}>
				<div>
					<label for="file">Choose file to upload</label>
					<input type="file" id="file" name="file" multiple onChange={setNewFile}/>
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	)
}

export default UploadFiles;