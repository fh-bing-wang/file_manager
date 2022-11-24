import { useCallback, useState } from "react";

const UploadFiles = () => {
	const [file, setFile] = useState(null);
	const setNewFile = useCallback((e) => {
		console.log(e.target.value);
		setFile(e.target.files[0]);
	}, []);

	const upload = useCallback((e) => {
		e.preventDefault();

		const formData = new FormData();
    	formData.append("file", file);
		console.log('file: ', file);
		console.log('formData: ', formData);
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