/**
 * Name: width x height
 * 8K 7680 X 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
function resolutionName (width, height) {
    if(width >= 7680 && height >= 4320) {
        return "8K"
    } else if(width >= 3840 && height >= 2160) {
        return "4K"
    } else if(width >= 2560 && height >= 1440) {
        return "WQHD"
    }  else if(width >= 1920 && height >= 1080) {
        return "FHD"
    } else if(width >= 1280 && height >= 720) {
        return "HD"
    } else {
        return false;
    }
}

let name = resolutionName(1366, 768)

console.log(name)