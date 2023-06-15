export const useDriveResolver = (fileUrl: string) => {
    console.log('File URL Resolver', fileUrl)
    if (fileUrl.includes('d/')) {

        const fileId = fileUrl.split('d/')[1].split('/')[0];
        return `https://drive.google.com/uc?export=view&id=${fileId}`
    }
    else return fileUrl

}
