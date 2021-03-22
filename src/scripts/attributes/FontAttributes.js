export class FontAttributes{
    constructor(){
        this.__textColor='#f06';
        this.__font='Arial';
        this.__size=16;
        this.__letterSpace=0;
        this.__anchor='start';
        this.__fontWeight='normal';
        this.__fontStyle='normal';
        this.__fontVariant='normal';
        this.__fontStretch='normal';
    }
    get textColor(){
        return this.__textColor;
    }

    set textColor(tcolor){
        this.__textColor= tcolor;
    }

    get font(){
        return this.__font;
    }

    set font(fonttype){
        this.__font = fonttype;
    }

    get size(){
        return this.__size;
    }

    set size(fontSize){
        this.__size = fontSize;
    }

    get anchor(){
        return this.__anchor;
    }

    set anchor(position){
        this.__anchor = position;
    }

    get fontWeight(){
        return this.__fontWeight;
    }

    set fontWeight(weight){
        this.__fontWeight = weight;
    }

    get fontStyle(){
        return this.__fontStyle;
    }

    set fontStyle(style){
        this.__fontStyle = style;
    }

    get fontVariant(){
        return this.__fontVariant;
    }

    set fontVariant(variant){
        this.__fontVariant = variant;
    }

    get fontStretch(){
        return this.__fontStretch;
    }

    set fontStretch(fstretch){
        this.__fontStretch = fstretch;
    }

    get letterSpace(){
        return this.__letterSpace;
    }

    set letterSpace(lspace){
        this.__letterSpace = lspace;
    }
}