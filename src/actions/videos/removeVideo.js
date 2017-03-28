export const REMOVE_VIDEO = 'REMOVE_VIDEO';

export default function removeVideo(videoUrl) {
    return {
        type: REMOVE_VIDEO,
        payload: videoUrl
    };
}
