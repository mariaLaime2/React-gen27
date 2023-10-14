
import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard";
const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;
export const CategoryList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10 ">
        {/**Category ciencia */}
      <CategoryCard 
      category={categories.ciencia} 
      src={imgCiencia}
      alt={`Categoría ${categories.ciencia}`}
      gradientColor='from-purple-500 to-pink-500'
       />
      {/**Category deportes */}
      <CategoryCard
      category={categories.deportes}
      src={imgDeportes}
      alt={`Categoría ${categories.deportes}`}
      gradientColor='from-lime-400 to-teal-700'/>
     {/**Category filosofia */}
      <CategoryCard
      category={categories.filosofia}
      src={imgFilosofia}
      alt={`Categoría ${categories.filosofia}`}
      gradientColor='from-red-400 to-zinc-400'/>
     {/**Category geografia */}
      <CategoryCard
      category={categories.geografia}
      src={imgGeografia}
      alt={`Categoría ${categories.geografia}`}
      gradientColor='from-cyan-500 to-lime-200'/>
      
       {/**Category historia*/}

      <CategoryCard
      category={categories.historia}
      src={imgHistoria}
      alt={`Categoría ${categories.historia}`}
      gradientColor='from-sky-300 to-indigo-900'/>
      
      
      {/**Category literatura */}
      <CategoryCard
      category={categories.literatura}
      src={imgLiteratura}
      alt={`Categoría ${categories.literatura}`}
      gradientColor='from-amber-400 to-emerald-600'/>
      
      {/**Category tecnologia */}
      <CategoryCard
      category={categories.tecnologia}
      src={imgTecnologia}
      alt={`Categoría ${categories.tecnologia}`}
      gradientColor='from-violet-900 to-rose-500'/>
      


    </div>
  );
};
