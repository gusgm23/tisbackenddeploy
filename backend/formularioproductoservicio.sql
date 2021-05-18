/* SQL Manager Lite for MySQL                              5.8.0.53936 */
/* ------------------------------------------------------------------- */
/* Host     : localhost                                                */
/* Port     : 3306                                                     */
/* Database : formulariosolicitud                                      */


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES 'utf8mb4' */;

SET FOREIGN_KEY_CHECKS=0;

CREATE DATABASE `formulariosolicitud`
    CHARACTER SET 'utf8'
    COLLATE 'utf8_unicode_ci';

USE `formulariosolicitud`;

/* Structure for the `solicitudproductoservicio` table : */

CREATE TABLE `solicitudproductoservicio` (
  `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `detalle` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `fechaDeSolicitud` DATE NOT NULL,
  `responsableDeSolicitud` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `monto` INTEGER(10) NOT NULL,
  PRIMARY KEY USING BTREE (`id`)
) ENGINE=InnoDB
AUTO_INCREMENT=10 CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci'
;

/* Data for the `solicitudproductoservicio` table  (LIMIT 0,500) */

INSERT INTO `solicitudproductoservicio` (`id`, `detalle`, `fechaDeSolicitud`, `responsableDeSolicitud`, `monto`) VALUES
  (1,'solicitud para compra de camaras','2021-05-13','gustavo gonzales',500),
  (3,'ula cato','2021-05-13','gustavo',500),
  (6,'prueba de solicitud añadiendo','2021-05-13','gustavo',500),
  (7,'prueba 2','2021-05-13','gustavo',500),
  (8,'prueba tres','2021-05-14','gus',123),
  (9,'ula cato xdos','2021-05-15','raquel',123);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;