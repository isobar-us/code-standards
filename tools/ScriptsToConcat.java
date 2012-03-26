// HTML5 boilerplate scripts parser
// Daniel Holth <dholth@fastmail.fm.com>, 2012
// Public Domain. http://creativecommons.org/publicdomain/zero/1.0/

import java.io.FileReader;
import java.io.IOException;

import javax.swing.text.MutableAttributeSet;
import javax.swing.text.html.HTML;
import javax.swing.text.html.HTML.Tag;
import javax.swing.text.html.HTMLEditorKit.ParserCallback;
import javax.swing.text.html.parser.ParserDelegator;


/**
 * Parse an HTML file, printing the src attribute of all scripts
 * between magic <!-- scripts concatenated --> and <!-- end scripts --> comments.
 */
public class ScriptsToConcat extends ParserCallback {
    private boolean emitting = false;

    @Override
    public void handleComment(char[] arg0, int arg1) {
        String text = new String(arg0);
        if(text.startsWith(" scripts concatenated ")) {
            emitting = true;
        } else if (text.startsWith(" end scripts ") ||
                   text.startsWith(" end concatenated and minified scripts")) {
            emitting = false;
        }
    }

    @Override
    public void handleStartTag(Tag t, MutableAttributeSet a, int pos) {
        if(!emitting || t != HTML.Tag.SCRIPT) {
            return;
        }
        String scriptName = a.getAttribute(HTML.Attribute.SRC).toString();
        if(scriptName != null) {
            System.out.println(scriptName);
        }
    }

    public static void main(String args[]) throws IOException {
        if(args.length != 1) {
            System.err.println("Accepts exactly one argument: the filename of an HTML document.");
            System.exit(1);
        }
        FileReader fr = new FileReader(args[0]);
        new ParserDelegator().parse(fr, new ScriptsToConcat(), true);
    }
}
