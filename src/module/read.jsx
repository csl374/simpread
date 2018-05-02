console.log( "===== simpread option read mode load =====" )

import th             from 'theme';
import * as ss        from 'stylesheet';
import * as conf      from 'config';

import TextField      from 'textfield';
import SelectField    from 'selectfield';

import ThemeSel       from 'themesel';
import Shortcuts      from 'shortcuts';

const getName = ( value, items ) => {
    for ( const item of items ) {
        if ( value == "" ) return item.name;
        else if ( item.value == value ) return item.name;
    }
};

export default class ReadOpt extends React.Component {

    changeBgColor( theme ) {
        if ( !ss.VerifyCustom( "theme", this.props.option.custom ) ) {
            this.props.option.theme = theme;
            th.Change( this.props.option.theme );
            console.log( "this.props.option.theme = ", this.props.option.theme )
        } else {
            new Notify().Render( '由于已使用 自定义样式，因此当前操作无效，详细说明 <a href="https://github.com/Kenshin/simpread/wiki/自定义样式" target="_blank">请看这里</a>' );
        }
    }

    changeShortcuts( shortcuts ) {
        this.props.option.shortcuts = shortcuts;
        console.log( "this.props.option.shortcuts = ", this.props.option.shortcuts )
    }

    changeFontfamily( value, name ) {
        if ( !ss.VerifyCustom( "fontfamily", this.props.option.custom ) ) {
            ss.FontFamily( value );
            this.props.option.fontfamily = value;
            console.log( "this.props.option.fontfamily = ", value, name )
        } else {
            new Notify().Render( '由于已使用 自定义样式，因此当前操作无效，详细说明 <a href="https://github.com/Kenshin/simpread/wiki/自定义样式" target="_blank">请看这里</a>' );
        }
    }

    changeFontsize( value, name ) {
        if ( !ss.VerifyCustom( "fontsize", this.props.option.custom ) ) {
            ss.FontSize( value );
            this.props.option.fontsize = value;
            console.log( "this.props.option.fontsize = ", value, name )
        } else {
            new Notify().Render( '由于已使用 自定义样式，因此当前操作无效，详细说明 <a href="https://github.com/Kenshin/simpread/wiki/自定义样式" target="_blank">请看这里</a>' );
        }
    }

    changeLayout( value, name ) {
        if ( !ss.VerifyCustom( "margin", this.props.option.custom ) ) {
            ss.Layout( value );
            this.props.option.layout = value;
            console.log( "this.props.option.layout = ", value, name )
        } else {
            new Notify().Render( '由于已使用 自定义样式，因此当前操作无效，详细说明 <a href="https://github.com/Kenshin/simpread/wiki/自定义样式" target="_blank">请看这里</a>。' );
        }
    }

    render() {
        return (
            <sr-opt-read>
                <sr-opt-gp>
                    <sr-opt-label>主题色</sr-opt-label>
                    <ThemeSel themes={ th.colors } names={ th.names } labels={ conf.readLabels } theme={ this.props.option.theme } changeBgColor={ val=>this.changeBgColor(val) } />
                </sr-opt-gp>
                <sr-opt-gp>
                    <Shortcuts shortcuts={ this.props.option.shortcuts } changeShortcuts={ val=>this.changeShortcuts(val) } />
                </sr-opt-gp>
                <sr-opt-gp>
                    <SelectField waves="md-waves-effect"
                        name={ getName( this.props.option.fontfamily, conf.fontfamily )} items={ conf.fontfamily }
                        floatingtext="字体类型" placeholder="默认为 系统类型"
                        onChange={ (v,n)=>this.changeFontfamily(v,n) }
                    />
                </sr-opt-gp>
                <sr-opt-gp>
                    <SelectField waves="md-waves-effect"
                        name={ getName( this.props.option.fontsize, conf.fontsize )} items={ conf.fontsize }
                        floatingtext="字体大小" placeholder="默认为 正常"
                        onChange={ (v,n)=>this.changeFontsize(v,n) }
                    />
                </sr-opt-gp>
                <sr-opt-gp>
                    <SelectField waves="md-waves-effect"
                        name={ getName( this.props.option.layout, conf.layout )} items={ conf.layout }
                        floatingtext="版面布局" placeholder="默认为 正常"
                        onChange={ (v,n)=>this.changeLayout(v,n) }
                    />
                </sr-opt-gp>
            </sr-opt-read>
        )
    }
}
