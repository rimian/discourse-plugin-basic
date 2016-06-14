# discourse-plugin-basic
A Basic Discourse Plugin. Experimenting and that kind of thang.

## Integration specs

Discourse runs integration specs via a rake task with qunit and phantomjs. Not the best way to run them but that's the way it is...

To run this test:

`
rake qunit:test MODULE='Acceptance: Plugin Basic' RETRY=false
`
