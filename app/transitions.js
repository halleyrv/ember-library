export default function(){
  this.transition(
    this.fromRoute('libraries.index'),
    this.toRoute('libraries.new'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
};
