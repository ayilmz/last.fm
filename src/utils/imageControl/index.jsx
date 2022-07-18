import {lastfmStatic} from "../../enums";
export const imageControl = src => {
    return src.trim().length === 0 ? lastfmStatic.NOT_FOUND_IMAGE : src;
};
