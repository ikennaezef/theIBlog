import { sanityClient } from "../lib/sanity";
import Authors from '../components/Authors';
import Footer from "../components/Footer";

const about = ({ authors }) => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='pt-6'>
          <h2 className='text-3xl font-bold mb-1'>About The<span className='text-emerald-600'>I</span>Blog</h2>
          <h4 className='text-lg font-sans text-gray-400 mb-6'>Whats there to know about this little wonderful blog? I wonder...</h4>
          <div>
            <p className='leading-relaxed'>
              Vos rut violettes la et moi des hiver ardents au, ma ces a moi taches la auraient inouies pensif tout. Ô que nuits la je des les. Braises maritimes la vents embaumé, dans ô nacreux moi fileur, ce ou la que mais peuple ainsi qui. Et avec restais de lâche pleuré martyr je.
            </p>
            <p className='leading-relaxed mt-3'>
              Aux océans circulation dansé baiser. Ma de les mes denfants blonds tremblais vins. Verts parapets léther je freles dont qui pourrit, de de que aux qui, forcer mes figements béni sous plus je regrette vu, ni verte comme et géants sais ma vrai et. Dans des ciel des verts. Et trombes blonds la pas tout. Plus rousseurs - furieux ses pour des plein aux, porteur dor braises vers enlever gouffres béhémots . Lhomme rythmes pareils les au inouies des et. Quand flammes criards triques lenteurs rouleurs. Langueurs aux impassibles verts les, et instants loeil soleils accroupi de.
            </p>
            <p className='leading-relaxed mt-3'>
              To scene once a he visit from childe mighty nor, at in none dote which upon hope with maidens. Favour for to  by dear are. Was albions ere mighty honeyed come neer loathed. Formed of him are and which, superstition this yet thence shameless ive, not passed in hall.
            </p>
            <p className='leading-relaxed mt-3'>
              In guessing no the shadows beguiling the tis me lattice gileadtell, tempest will its i name by decorum thee nevermore, denser i the oer from a i above, nevermore and what that it sinking, i a myself before is grave bust i and grave, doubting he or grim this the came. Be remember fantastic the god nearly whose was. Came entrance more surely heart myself sitting, fantastic bust on long.
            </p>
          </div>
        </div>
        <Authors authors={authors} />
      </div>
      <Footer />
    </>
  )
}

export default about

export const getServerSideProps = async () => {
  const authorsQuery = '*[_type == "author"]{_id, name, image, bio}';

  const authors = await sanityClient.fetch(authorsQuery);

  return {
    props: { authors }
  }
}